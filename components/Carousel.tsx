import {
  Children,
  ReactNode,
  useState,
} from "react";
const Carousel: React.FC<{
  children: ReactNode;
  animateChildren?: (activeSlide: number) => void;
}> = ({ children, animateChildren }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="mb-32">
      <div className="relative pb-[55.3%]">
        <div
          ref={contentRef}
          className="absolute bg-secondarybg inset-0 border border-primary invisible"
        >
          {Children.toArray(children).map((Child, index) => (
            <div
              key={index}
              className={`h-full max-w-[98%] mx-auto ${
                activeSlide === index ? "" : " hidden"
              }`}
            >
              {Child}
            </div>
          ))}
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
          ></button>
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
