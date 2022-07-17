import { useRef, useEffect } from "react";

function useDidUpdate(callback: () => void) {
  const hasMountForStrictMode = useRef(false);
  const hasMount = useRef(false);
  useEffect(() => {
    if (hasMountForStrictMode.current) {
      if (hasMount.current) {
        callback();
      } else {
        hasMount.current = true;
      }
    }
    return () => {
      hasMountForStrictMode.current = true;
    };
  }, [callback]);
}

export default useDidUpdate;
