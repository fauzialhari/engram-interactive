import { useRef } from "react";
import FpsCtrl from "../helpers/FpsCtrl";
import useOnScrollEffect from "../utils/useOnScrollEffect";
import getElementRef from "../utils/getElementRef";
import ElementSetter from "../utils/elementSetter";

const AnimatedHeader: React.FC<{
  text: string;
  subtitle?: string;
  isLeftPositioned?: boolean;
}> = ({ text, isLeftPositioned = true, subtitle }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const spritesContainerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const bottomLineRef = useRef<HTMLDivElement>(null);
  const subtitleSpriteRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  function animateTextTyping() {
    const headerElement = new ElementSetter(getElementRef(headerRef));
    const spriteAnimation = new FpsCtrl(12, ({ frame }) => {
      if (frame === 0) {
        headerElement.element.childNodes[0].nodeValue = "";
        headerElement.removeClass("invisible");
      }
      if (!!text[frame]) {
        headerElement.element.childNodes[0].nodeValue =
          headerElement.element.childNodes[0].nodeValue + text[frame];
      } else {
        const [cursorHeader] = Array.from(
          headerElement.element.children as HTMLCollectionOf<HTMLElement>
        );
        const cursorHeaderElement = new ElementSetter(cursorHeader);
        const position = isLeftPositioned ? "left" : "right";
        const { marginRight, marginLeft, height } = getComputedStyle(
          headerElement.element
        );
        const headerMargin = parseInt(
          isLeftPositioned ? marginRight : marginLeft
        );
        const headerHeight = parseInt(height);
        const getCursorHeaderMarginPlusWidth = () => {
          const { marginRight, marginLeft, width } =
            getComputedStyle(cursorHeader);
          return (
            (isLeftPositioned ? parseInt(marginLeft) : parseInt(marginRight)) +
            parseInt(width)
          );
        };
        switch (frame) {
          case text.length:
            cursorHeaderElement.addStyle({
              height: `${headerHeight * 0.24}px`,
            });
            break;

          case text.length + 1:
            cursorHeaderElement.addStyle({
              [position]: `calc(100% + (${
                headerMargin * 0.5 - getCursorHeaderMarginPlusWidth()
              }px))`,
            });
            break;

          case text.length + 2:
            const lastCursorHeaderDimension = `${headerHeight * 0.43}px`;
            cursorHeaderElement.addStyle({
              [position]: `calc(100% + (${
                headerMargin * 0.75 - getCursorHeaderMarginPlusWidth()
              }px))`,
              height: lastCursorHeaderDimension,
              width: lastCursorHeaderDimension,
            });
            break;

          case text.length + 4:
            cursorHeaderElement.addStyle({
              [position]: `calc(100% + (${
                headerMargin - getCursorHeaderMarginPlusWidth()
              }px))`,
            });
            spriteAnimation.stopAnimation();
            break;

          default:
            break;
        }
      }
    });
    // setTimeout(() => {
    //   spriteAnimation.stopAnimation();
    // }, 2000);
  }
  function animate() {
    const bottomLineElement = new ElementSetter(getElementRef(bottomLineRef));
    bottomLineElement.removeClass("scale-x-0");

    const subtitleElement = new ElementSetter(getElementRef(subtitleRef));
    subtitleElement.removeClass(["opacity-0", "translate-x-full"]);

    const subtitleSpriteElement = new ElementSetter(
      getElementRef(subtitleSpriteRef)
    );
    const animateSubtitleSprite = () => {
      subtitleSpriteElement.removeClass(["scale-y-[7]", "translate-y-[6em]"]);
      subtitleSpriteElement.element.removeEventListener(
        "transitionend",
        animateSubtitleSprite
      );
    };
    subtitleSpriteElement
      .removeClass("invisible")
      .addClass("scale-y-[7]")
      .element.addEventListener("transitionend", animateSubtitleSprite);

    const containerElement = new ElementSetter(getElementRef(containerRef));
    const { right, left } = containerElement.element.getBoundingClientRect();
    const bottomLineWidth = isLeftPositioned
      ? right
      : document.documentElement.clientWidth - left;

    const spritesContainerElement = new ElementSetter(
      getElementRef(spritesContainerRef)
    );
    spritesContainerElement.addStyle({
      width: `${bottomLineWidth}px `,
    });
    const cursorElement = new ElementSetter(getElementRef(cursorRef));
    cursorElement.removeClass("invisible");
    const cursorWidth = cursorElement.element.getBoundingClientRect().width;
    const leftSpace = containerElement.element.getBoundingClientRect().left;
    cursorElement.addStyle({ transform: `scaleX(${leftSpace / cursorWidth})` });
    cursorElement.element.addEventListener("transitionend", () => {
      cursorElement.addClass("invisible");
      animateTextTyping();
    });
  }
  useOnScrollEffect(containerRef, animate);
  return (
    <div className={`mb-10 lg:mb-16 ${isLeftPositioned ? "" : "text-right"}`}>
      <div ref={containerRef} className="relative inline-block mb-4">
        <h1
          ref={headerRef}
          className={`relative invisible inline-block leading-[0.7] ${
            isLeftPositioned ? "mr-20" : "ml-20"
          } mb-4`}
        >
          {text}
          <span
            className={`absolute w-5 h-11 mx-2 bg-primary top-1/2 -translate-y-1/2 ${
              isLeftPositioned ? "left-full" : "right-full"
            }`}
          >
            &nbsp;
          </span>
        </h1>
        <div
          ref={spritesContainerRef}
          className={`absolute w-full h-full top-1/2 -translate-y-1/2 ${
            isLeftPositioned ? "right-0" : "left-0"
          } flex items-baseline`}
        >
          <div
            ref={cursorRef}
            className={`w-4 h-11 bg-primary invisible transition-transform duration-[83ms] delay-[83ms] ${
              isLeftPositioned ? "origin-left" : "origin-right"
            }`}
          ></div>
          <div
            ref={bottomLineRef}
            className={`border-b-2 border-primary w-full scale-x-0 absolute ${
              isLeftPositioned ? "origin-left" : "origin-right"
            } bottom-0 duration-1000`}
          ></div>
        </div>
      </div>
      <div
        className={`flex items-center ${
          isLeftPositioned ? "" : "flex-row-reverse"
        }`}
      >
        <span
          ref={subtitleSpriteRef}
          className={`invisible inline-block w-1 h-[1em] bg-primary align-middle transition-transform duration-500 translate-y-[6em] origin-bottom ${
            isLeftPositioned ? "mr-28" : "ml-28"
          }`}
        >
          &nbsp;
        </span>
        <div className="inline-flex items-center overflow-hidden">
          <p
            ref={subtitleRef}
            className="uppercase inline-block leading-none opacity-0 translate-x-full transition-all duration-700 delay-[417ms] mb-0"
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeader;
