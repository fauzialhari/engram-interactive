import { ReactNode, useLayoutEffect, useRef } from "react";
import ScrollSnap from "../helpers/ScrollSnap";
import getElementRef from "../utils/getElementRef";

const ScrollSnapController: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const scrollSnapRef = useRef(null);

  useLayoutEffect(() => {
    const scrollSnapElement = getElementRef(scrollSnapRef);
    const scrollSnapChildren = [].slice.call(scrollSnapElement.children);
    new ScrollSnap(scrollSnapChildren, 5000);
  }, []);
  return <div ref={scrollSnapRef}>{children}</div>;
};
export default ScrollSnapController;
