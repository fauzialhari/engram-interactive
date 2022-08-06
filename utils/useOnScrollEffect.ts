import { useCallback, RefObject } from "react";
import getElementRef from "./getElementRef";
import useOnRender from "./useOnRender";
export default function useOnScroll(
  contentRef: RefObject<HTMLElement>,
  callback: () => void
) {
  const callbackOnReveal = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.35,
      }
    );
    observer.observe(getElementRef(contentRef));
  }, [callback, contentRef]);
  useOnRender(callbackOnReveal);
}
