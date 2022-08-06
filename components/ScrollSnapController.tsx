import { ReactNode, useEffect, useRef } from "react";
import ScrollSnap from "../helpers/ScrollSnap";
import getElementRef from "../utils/getElementRef";

const ScrollSnapController: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const scrollSnapRef = useRef(null);

  useEffect(() => {
    const scrollSnapElement = getElementRef(scrollSnapRef);
    const scrollSnapChildren = [].slice.call(scrollSnapElement.children);
    new ScrollSnap(scrollSnapChildren, 5000);
  }, []);
  return <div ref={scrollSnapRef}>{children}</div>;
};
export default ScrollSnapController;
