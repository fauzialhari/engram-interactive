import { KeyboardEvent, useRef, MouseEvent, useEffect } from "react";
import FuturisticEdge from "./FuturisticEdge";
import getElementRef from "../utils/getElementRef";
import ElementSetter from "../utils/elementSetter";
const Modal: React.FC<{
  title?: string;
  date?: string;
  content?: string;
  exit: () => void;
}> = ({ title, date, content="", exit }) => {
  const containerRef = useRef(null);
  const exitButtonRef = useRef(null);
  const contentRef = useRef(null);
  useEffect(() => {
    animate();
  }, []);
  function animate(isEntrance: boolean = true, onTransitionEnd?: () => void) {
    const container = new ElementSetter(getElementRef(containerRef));
    container.element.focus();
    const contentElement = new ElementSetter(getElementRef(contentRef));
    if (isEntrance) {
      container.removeClass("scale-0");
      contentElement.removeClass("opacity-0");
      document.body.classList.add("overflow-y-hidden")
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
      document.body.classList.remove("overflow-y-hidden")
    }
  }
  function onBackdropClick(event: MouseEvent) {
    if (event.target === containerRef.current || event.target === exitButtonRef.current) {
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
      className="scale-0 transition-transform duration-[167ms] fixed inset-0 backdrop-blur flex justify-center items-center z-20"
      tabIndex={0}
      onClick={onBackdropClick}
      onKeyUp={onKeyEscapePressed}
    >
      <div className="absolute w-10/12 h-4/5 px-9 py-8 ">
        <FuturisticEdge>
          <div className="h-full relative">
            <button
              ref={exitButtonRef}
              type="button"
              aria-label="Close article"
              className={`
                absolute
                top-0
                right-0
                w-3/12
                p-7
                max-w-[100px]
              `}
              onClick={onBackdropClick}
            >
              <span
                className={`
                  pointer-events-none
                  block
                  relative
                  w-full
                  py-3
                  before:content-['']
                  before:absolute
                  before:block
                  before:bg-primary
                  before:w-full
                  before:h-1
                  before:top-1/2 before:-translate-y-1/2 before:rotate-45
                  after:content-['']
                  after:absolute
                  after:block
                  after:bg-primary
                  after:w-full
                  after:h-1
                  after:top-1/2 after:-translate-y-1/2 after:-rotate-45
                `}
              ></span>
            </button>
            <div className="h-full bg-tertiary px-44 py-32 overflow-auto overscroll-contain">
              <div
                ref={contentRef}
                className="opacity-0 transition-opacity duration-[167ms] delay-[167ms] relative min-h-full"
              >
                {title && <h2 className="text-primary font-normal">{title}</h2>}
                {date && <h2 className="text-primary font-normal text-right">{date}</h2>}
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </div>
            </div>
          </div>
        </FuturisticEdge>
      </div>
    </div>
  );
};

export default Modal;
