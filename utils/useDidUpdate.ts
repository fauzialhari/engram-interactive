import { useRef, useEffect } from "react";

function useDidUpdate(callback: () => void) {
  const hasMount = useRef(false);
  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
  }, [callback]);
}

export default useDidUpdate;
