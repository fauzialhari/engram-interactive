import {
  Children,
  ReactNode,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import FpsCtrl from "../helpers/FpsCtrl";
import getElementRef from "../utils/getElementRef";
import ElementSetter from "../utils/elementSetter";
import useDidUpdate from "../utils/useDidUpdate";
import useOnScrollEffect from "../utils/useOnScrollEffect";

const Carousel: React.FC<{
  children: ReactNode;
  animateChildren?: (activeSlide: number) => void;
}> = ({ children, animateChildren }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const navigatorRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const animate = useCallback(() => {
    const carouselAnimation = new FpsCtrl(12, ({ frame }) => {
      const contentElement = new ElementSetter(getElementRef(contentRef));
      const navigatorElement = new ElementSetter(getElementRef(navigatorRef));
      const navigationElement = new ElementSetter(getElementRef(navigationRef));

      switch (frame) {
        case 0:
          break;
        case 1:
          contentElement
            .addStyle({
              transform: "scale(0.07)",
              background: "var(--primary-color)",
            })
            .removeClass("invisible");
          break;

        case 2:
          contentElement.removeStyle("background");
          break;

        case 3:
          contentElement.addStyle({
            transform: "scale(0.15)",
          });
          break;

        case 4:
          contentElement.addStyle({
            transform: "scale(0.85)",
          });
          break;

        case 5:
          contentElement.addStyle({
            transform: "scale(0.95)",
          });
          navigatorElement
            .addStyle({
              opacity: "0.33",
            })
            .removeClass("opacity-0");
          navigationElement
            .addStyle({
              opacity: "0.33",
            })
            .removeClass("opacity-0");
          break;

        case 6:
          contentElement.addStyle({
            transform: "scale(1)",
          });
          navigatorElement.addStyle({
            opacity: "0.66",
          });
          navigationElement.addStyle({
            opacity: "0.66",
          });
          if (!!animateChildren) {
            animateChildren(activeSlide);
          }
          break;

        case 7:
          navigatorElement.removeStyle("opacity");
          navigationElement.removeStyle("opacity");
          break;

        default:
          break;
      }
    });
    setTimeout(() => {
      carouselAnimation.stopAnimation();
    }, 1000);
  }, [activeSlide, animateChildren]);
  useDidUpdate(animate);
  useOnScrollEffect(contentRef, animate);
  function onClickNavigator(direction: "prev" | "next") {
    if (direction === "prev" && activeSlide !== 0) {
      setActiveSlide(activeSlide - 1);
    } else if (activeSlide !== Children.toArray(children).length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  }
  return (
    <div className="mb-28">
      <div className="relative pb-[55.3%]">
        <div
          ref={navigatorRef}
          className="opacity-0 absolute inset-x-0 inset-y-1/2 -translate-y-1/2 w-full h-1/4 flex justify-between items-center"
        >
          <button
            type="button"
            title="Previous"
            className="
              p-0
              h-4
              w-4
              border-primary
              w-16
              h-16
              border-primary
              border-l-[5px]
              border-b-[5px]
              rotate-45
              -translate-x-full
              relative
              before:content-['']
              before:absolute
              before:top-2.5
              before:right-2.5
              before:block
              before:w-full
              before:h-full
              before:box-content
              before:border-l-[5px]
              before:border-b-[5px]
              before:border-secondary
              disabled:opacity-25"
            disabled={activeSlide === 0}
            onClick={() => onClickNavigator("prev")}
          ></button>
          <button
            type="button"
            title="Next"
            className="
              p-0
              h-4
              w-4
              border-primary
              w-16
              h-16
              border-primary
              border-r-[5px]
              border-t-[5px]
              rotate-45
              translate-x-full
              relative
              before:content-['']
              before:absolute
              before:bottom-2.5
              before:left-2.5
              before:block
              before:w-full
              before:h-full
              before:box-content
              before:border-r-[5px]
              before:border-t-[5px]
              before:border-secondary
              disabled:opacity-25"
            disabled={activeSlide === Children.toArray(children).length - 1}
            onClick={() => onClickNavigator("next")}
          ></button>
        </div>
        <div
          ref={contentRef}
          className="absolute bg-secondarybg inset-0 border border-primary invisible"
        >
          {Children.toArray(children).map((Child, index) => (
            activeSlide === index ? <div
              key={index}
              className="h-full px-11 py-14 mx-auto"
            >
              {Child}
            </div> : null
          ))}
        </div>
      </div>
      <div ref={navigationRef} className="text-right opacity-0">
        <ol className="inline mr-9">
          {Children.toArray(children).map((child, index) => (
            <li
              key={index}
              className={`list-none inline-block mr-2 h-1.5 w-12 ${
                index === activeSlide ? "bg-primary" : "bg-tertiary"
              }`}
            ></li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Carousel;
