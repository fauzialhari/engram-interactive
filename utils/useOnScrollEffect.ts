import { useCallback, RefObject } from "react";
import getElementRef from "./getElementRef";
import useOnRender from "./useOnRender";
export default function useOnScroll(
  contentRef: RefObject<HTMLElement>,
  callback: () => void
) {
  const onScroll = useCallback(() => {
    const contentRefTop = getElementRef(contentRef).getBoundingClientRect().top;
    if (contentRefTop > 0 && contentRefTop < 0.5 * window.innerHeight) {
      callback();
      window.removeEventListener("scroll", onScroll);
    }
  }, [callback, contentRef]);
  useOnRender(() => window.addEventListener("scroll", onScroll));
}
