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
