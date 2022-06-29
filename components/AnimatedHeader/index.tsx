import { useLayoutEffect, useRef } from "react";

class FpsCtrl {
  fps: number;
  delay: number;
  time: number;
  frame: number;
  tref: number;
  callback: any;
  constructor(
    fps: number,
    callback: ({ time, frame }: { time: number; frame: number }) => void
  ) {
    this.fps = fps;
    this.delay = 1000 / this.fps; // calc. time per frame
    this.time = 0; // start time
    this.frame = -1; // frame count
    this.tref = 0; // rAF time reference
    this.callback = callback;
    this.loop(performance.now());
  }

  loop(timestamp: number) {
    if (this.time === 0) {
      this.time = timestamp;
    } // init start time}
    const seg = Math.floor((timestamp - this.time) / this.delay); // calc frame no.
    if (seg > this.frame) {
      // moved to next frame?
      this.frame = seg; // update
      this.callback({
        // callback function
        time: timestamp,
        frame: this.frame,
      });
    }
    this.tref = requestAnimationFrame(this.loop.bind(this));
  }

  stopAnimation() {
    cancelAnimationFrame(this.tref);
  }
}

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
    const spriteAnimation = new FpsCtrl(12, ({ frame }) => {
      if (headerRef.current != null) {
        if (frame === 0) {
          headerRef.current.childNodes[0].nodeValue = "";
          headerRef.current.classList.remove("invisible");
        }
        if (!!text[frame]) {
          headerRef.current.childNodes[0].nodeValue =
            headerRef.current.childNodes[0].nodeValue + text[frame];
        } else if (frame <= text.length + 4) {
          const [cursorHeaderElement] = Array.from(
            headerRef.current.children as HTMLCollectionOf<HTMLElement>
          );
          switch (frame) {
            case text.length:
              cursorHeaderElement.style.height = "10px";
              break;

            case text.length + 1:
              cursorHeaderElement.style[isLeftPositioned ? "left" : "right"] = "calc(100% + 40px)";
              break;

            case text.length + 2:
              cursorHeaderElement.style[isLeftPositioned ? "left" : "right"] = "calc(100% + 70px)";
              cursorHeaderElement.style.height = "18px";
              cursorHeaderElement.style.width = "18px";
              break;

            case text.length + 4:
              cursorHeaderElement.style[isLeftPositioned ? "left" : "right"] = "calc(100% + 84px)";
              break;

            default:
              break;
          }
        }
      }
    });
    setTimeout(() => {
      spriteAnimation.stopAnimation();
    }, 2000);
  }
  function animateSprites() {
    const spriteAnimation = new FpsCtrl(12, ({ frame }) => {
      if (
        headerRef.current != null &&
        bottomLineRef.current != null &&
        cursorRef.current != null &&
        containerRef.current != null &&
        subtitleSpriteRef.current != null &&
        subtitleRef.current != null
      ) {
        const leftSpace = containerRef.current.getBoundingClientRect().left;
        const containerWidth =
          containerRef.current.getBoundingClientRect().width;
        switch (frame) {
          case 1:
            bottomLineRef.current.style.transform = "scaleX(3.9%)";
            cursorRef.current.style.visibility = "visible";
            containerRef.current.style.width = `${containerWidth}px`;
            subtitleSpriteRef.current.style.transform =
              "translateY(6rem) scaleY(0.5)";
            subtitleSpriteRef.current.style.transformOrigin = "bottom";
            subtitleSpriteRef.current.classList.remove("invisible");
            break;
          case 2:
            bottomLineRef.current.style.transform = "scaleX(12.74%)";
            const cursorWidth = cursorRef.current.getBoundingClientRect().width;
            cursorRef.current.style.transform = `scaleX(${
              leftSpace / cursorWidth
            })`;
            subtitleSpriteRef.current.style.transform =
              "translateY(6rem) scaleY(1.5)";
            break;
          case 3:
            bottomLineRef.current.style.transform = "scaleX(25.61%)";
            cursorRef.current.style.removeProperty("visibility");
            subtitleSpriteRef.current.style.transform =
              "translateY(3rem) scaleY(3)";
            subtitleSpriteRef.current.style.transformOrigin = "top";
            animateTextTyping();
            break;
          case 4:
            bottomLineRef.current.style.transform = "scaleX(36.65%)";
            break;
          case 5:
            bottomLineRef.current.style.transform = "scaleX(57.16%)";
            subtitleSpriteRef.current.style.transform =
              "translateY(100%) scaleY(1.25)";
            subtitleRef.current.style.transform = "translateX(85.8%)";
            subtitleRef.current.style.opacity = "25%";
            break;
          case 6:
            bottomLineRef.current.style.transform = "scaleX(69.78%)";
            subtitleSpriteRef.current.style.removeProperty("transform");
            subtitleRef.current.style.transform = "translateX(71.5%)";
            subtitleRef.current.style.opacity = "50%";
            break;
          case 7:
            bottomLineRef.current.style.transform = "scaleX(87.01%)";
            subtitleRef.current.style.transform = "translateX(57.2%)";
            subtitleRef.current.style.opacity = "75%";
            break;
          case 8:
            bottomLineRef.current.style.transform = "scaleX(95.75%)";
            subtitleRef.current.style.transform = "translateX(42.9%)";
            subtitleRef.current.style.opacity = "100%";
            break;
          case 9:
            bottomLineRef.current.style.transform = "scaleX(98.42%)";
            subtitleRef.current.style.transform = "translateX(28.6%)";
            break;
          case 10:
            bottomLineRef.current.style.transform = "scaleX(100%)";
            subtitleRef.current.style.transform = "translateX(14.3%)";
            break;
          case 11:
            subtitleRef.current.style.transform = "translateX(0)";
            break;
          default:
            break;
        }
      }
    });
    setTimeout(() => {
      spriteAnimation.stopAnimation();
    }, 1000);
  }
  useLayoutEffect(() => {
    if (
      containerRef.current != null &&
      spritesContainerRef.current != null &&
      bottomLineRef.current != null
    ) {
      const { right, left } = containerRef.current.getBoundingClientRect();
      const bottomLineWidth = isLeftPositioned
        ? right
        : document.documentElement.clientWidth - left;
      spritesContainerRef.current.style.width = `${bottomLineWidth}px `;
    }
  });
  return (
    <>
      <div className={`mb-24 ${isLeftPositioned ? "" : "text-right"}`}>
        <div ref={containerRef} className="relative inline-block mb-5">
          <h1
            ref={headerRef}
            className={`relative invisible inline-block leading-[0.7] ${
              isLeftPositioned ? "mr-28" : "ml-28"
            } mb-5`}
          >
            {text}
            <span className={`absolute w-6 h-[60px] mx-2.5 bg-primary top-1/2 -translate-y-1/2 ${isLeftPositioned ? "left" : "right"}-full`}>
              &nbsp;
            </span>
          </h1>
          <div
            ref={spritesContainerRef}
            className={`absolute w-full h-full top-1/2 -translate-y-1/2 ${isLeftPositioned ? "right" : "left"}-0 flex items-baseline`}
          >
            <div
              ref={cursorRef}
              className={`w-6 h-[58px] bg-primary invisible origin-${isLeftPositioned ? "right" : "left"}`}
            ></div>
            <div
              ref={bottomLineRef}
              className={`border-b-2 border-primary w-full scale-x-0 absolute ${isLeftPositioned ? "origin-left" : "origin-right"} bottom-0`}
            ></div>
          </div>
        </div>
        <div className={`flex items-center ${isLeftPositioned ? "" : "flex-row-reverse"}`}>
          <span
            ref={subtitleSpriteRef}
            className={`inline-block invisible w-[5px] h-[1em] bg-primary align-middle ${isLeftPositioned ? "mr-36" : "ml-36"}`}
          >
            &nbsp;
          </span>
          <div className="inline-flex items-center overflow-hidden">
            <p
              ref={subtitleRef}
              className="uppercase inline-block leading-none opacity-0 translate-x-full"
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <button onClick={animateSprites}>animate</button>
      </div>
    </>
  );
};

export default AnimatedHeader;
