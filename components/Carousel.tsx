import {
  Children,
  ReactNode,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import FpsCtrl from "../helpers/FpsCtrl";
import getElementRef from "../utils/getElementRef";
import ElementSetter from "../utils/elementSetter";
import useDidUpdate from "../utils/useDidUpdate";
import useOnScrollEffect from "../utils/useOnScrollEffect";

const Carousel: React.FC<{
  children: ReactNode;
  isSlideEffect?: boolean;
  animateChildren?: (activeSlide: number) => void;
}> = ({ children, isSlideEffect = false, animateChildren }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const navigatorRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [onSliding, setOnSliding] = useState(false);
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
  useDidUpdate(() => {
    if (!!animateChildren) {
      animateChildren(activeSlide);
    }
  });
  useOnScrollEffect(contentRef, animate);

  const slideDirection = useRef("next");
  function onClickNavigator(direction: "prev" | "next") {
    slideDirection.current = direction;
    if (direction === "prev" && activeSlide !== 0) {
      setActiveSlide(activeSlide - 1);
    } else if (activeSlide !== Children.toArray(children).length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  }

  useEffect(() => {
    if (isSlideEffect) {
      const sliderElement = getElementRef(sliderRef);
      const slides = Array.from(
        sliderElement.getElementsByClassName("slide")
      ) as HTMLElement[];
      const lastPointTarget = slides[activeSlide].offsetLeft;
      const initialPosition = sliderElement.scrollLeft;
      let previousMovement = sliderElement.scrollLeft;
      const getNextMovement = () => {
        const slideSpeed = sliderElement.offsetWidth * 0.06;
        let nextMovement = previousMovement;
        
        if (lastPointTarget > initialPosition) {
          nextMovement = previousMovement + slideSpeed;
          const isNextMoveBeyondLimit = nextMovement > lastPointTarget;
          return isNextMoveBeyondLimit ? lastPointTarget : nextMovement;
        } else if (lastPointTarget < initialPosition) {
          nextMovement = previousMovement - slideSpeed;
          const isNextMoveBeyondLimit = nextMovement < lastPointTarget;
          return isNextMoveBeyondLimit ? lastPointTarget : nextMovement;
        }
        console.log(slideSpeed, nextMovement);
        return nextMovement;
      };
      setOnSliding(true);
      let slideAnimation = 0;
      const slide = () => {
        slideAnimation = requestAnimationFrame(slide);
        const nextMovement = getNextMovement();

        sliderElement.scrollTo({
          left: nextMovement,
          behavior: "smooth",
        });
        previousMovement = nextMovement;
        if (nextMovement === lastPointTarget) {
          cancelAnimationFrame(slideAnimation);
          setOnSliding(false);
        }
      };
      slide();
    }
  }, [activeSlide, isSlideEffect]);
  return (
    <div>
      <div className="relative pb-[55.3%]">
        <div
          ref={contentRef}
          className="absolute bg-secondarybg inset-0 border border-primary invisible"
        >
          {isSlideEffect ? (
            <div className="h-full px-2 py-4 lg:px-8 lg:py-10 mx-auto">
              <div ref={sliderRef} className="relative overflow-hidden h-full">
                <div className="inline whitespace-nowrap">
                  {Children.toArray(children).map((Child, index) => (
                    <div
                      className="slide inline-block w-full h-full whitespace-normal"
                      key={index}
                    >
                      {Child}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            Children.toArray(children).map((Child, index) =>
              activeSlide === index ? (
                <div
                  key={index}
                  className="h-full px-2 py-4 lg:px-8 lg:py-10 mx-auto"
                >
                  {Child}
                </div>
              ) : null
            )
          )}
        </div>
        <div
          ref={navigatorRef}
          className="opacity-0 absolute inset-x-0 inset-y-1/2 -translate-y-1/2 w-full h-1/4 flex justify-between items-center"
        >
          <button
            type="button"
            title="Previous"
            className="
              p-0
              w-5
              h-5
              md:w-12
              md:h-12
              border-primary
              border-l-2
              border-b-2
              md:border-l-4
              md:border-b-4
              rotate-45
              -translate-x-full
              relative
              before:content-['']
              before:absolute
              before:top-1
              before:right-1
              md:before:top-2.5
              md:before:right-2.5
              before:block
              before:w-full
              before:h-full
              before:box-content
              before:border-l-2
              before:border-b-2
              md:before:border-l-4
              md:before:border-b-4
              before:border-secondary
              disabled:opacity-25"
            disabled={activeSlide === 0 || onSliding}
            onClick={() => onClickNavigator("prev")}
          ></button>
          <button
            type="button"
            title="Next"
            className="
              p-0
              w-5
              h-5
              md:w-12
              md:h-12
              border-primary
              border-r-2
              border-t-2
              md:border-r-4
              md:border-t-4
              rotate-45
              translate-x-full
              relative
              before:content-['']
              before:absolute
              before:bottom-1
              before:left-1
              md:before:bottom-2.5
              md:before:left-2.5
              before:block
              before:w-full
              before:h-full
              before:box-content
              before:border-r-2
              before:border-t-2
              md:before:border-r-4
              md:before:border-t-4
              before:border-secondary
              disabled:opacity-25"
            disabled={
              activeSlide === Children.toArray(children).length - 1 || onSliding
            }
            onClick={() => onClickNavigator("next")}
          ></button>
        </div>
      </div>
      <div ref={navigationRef} className="text-right opacity-0">
        <ol className="inline mr-7-">
          {Children.toArray(children).map((child, index) => (
            <li
              key={index}
              className={`list-none inline-block mr-1 h-0.5 w-4 lg:h-1 lg:w-9 ${
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
