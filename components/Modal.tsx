import { KeyboardEvent, useRef, MouseEvent, useLayoutEffect } from "react";
import FuturisticEdge from "./FuturisticEdge";
import getElementRef from "../utils/getElementRef";
import ElementSetter from "../utils/elementSetter";
const Modal: React.FC<{
  title: string;
  date: string;
  content: string;
  exit: () => void;
}> = ({ title, date, content, exit }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  useLayoutEffect(() => {
    animate();
  }, []);
  function animate(isEntrance: boolean = true, onTransitionEnd?: () => void) {
    const container = new ElementSetter(getElementRef(containerRef));
    container.element.focus();
    const contentElement = new ElementSetter(getElementRef(contentRef));
    if (isEntrance) {
      container.removeClass("scale-0");
      contentElement.removeClass("opacity-0");
    } else {
      container.addClass(["scale-0", "delay-[167ms]"]);
      contentElement.removeClass("delay-[167ms]");
      contentElement.addClass("opacity-0");
      if (!!onTransitionEnd) {
        contentElement.element.addEventListener(
          "transitionend",
          onTransitionEnd
        );
      }
    }
  }
  function onBackdropClick(event: MouseEvent) {
    if (event.target === containerRef.current) {
      animate(false, exit);
    }
  }
  function onKeyEscapePressed(event: KeyboardEvent) {
    if (event.key === "Escape") {
      animate(false, exit);
    }
  }
  return (
    <div
      ref={containerRef}
      className="scale-0 transition-transform duration-[167ms] fixed inset-0 backdrop-blur flex justify-center items-center"
      tabIndex={0}
      onClick={onBackdropClick}
      onKeyUp={onKeyEscapePressed}
    >
      <div className="absolute w-10/12 h-4/5 px-9 py-8 ">
        <FuturisticEdge>
          <div className="h-full bg-tertiary px-44 py-32 overflow-auto overscroll-contain">
            <div
              ref={contentRef}
              className="opacity-0 transition-opacity duration-[167ms] delay-[167ms]"
            >
              <h2 className="text-primary font-normal">{title}</h2>
              <h2 className="text-primary font-normal text-right">{date}</h2>
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
          </div>
        </FuturisticEdge>
      </div>
    </div>
  );
};

export default Modal;
