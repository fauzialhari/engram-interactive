import { useEffect, useRef } from "react";
export default function useOnRender(callback: () => void) {
  const initialRenderRef = useRef(true);
  useEffect(() => {
    if (initialRenderRef.current) {
      callback();
      initialRenderRef.current = false;
    }
  }, [callback]);
}
