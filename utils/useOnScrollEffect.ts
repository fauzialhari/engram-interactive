import { useEffect, useCallback, RefObject, useRef } from "react";
import getElementRef from "../utils/getElementRef";
export default function useOnScroll(
  contentRef: RefObject<HTMLElement>,
  callback: () => void
) {
  const initialRenderRef = useRef(true);
  const onScroll = useCallback(() => {
    const contentRefTop = getElementRef(contentRef).getBoundingClientRect().top;
    if (contentRefTop > 0 && contentRefTop < 0.5 * window.innerHeight) {
      callback();
      window.removeEventListener("scroll", onScroll);
    }
  }, [callback, contentRef]);
  useEffect(() => {
    if (initialRenderRef.current) {
      window.addEventListener("scroll", onScroll);
      initialRenderRef.current = false;
    }
  }, [onScroll]);
}
