import { useState, useCallback } from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import AnimatedHeader from "./AnimatedHeader";
const CharactersSlider: React.FC<{
  charactersContent: {
    characterImageUrl: string;
    id: string;
    title: string;
    description: string;
  }[];
}> = ({ charactersContent }) => {
  const [activeSlide, setActiveSlide] = useState(-1);
  const animate = useCallback((CarouselActiveSlide: number) => {
    setActiveSlide(CarouselActiveSlide);
  }, []);
  return (
    <section className="mx-auto relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-44 bg-secondarybg pt-9 pb-[0.5px]">
      <div className="container px-24 mx-auto">
        <AnimatedHeader
          isLeftPositioned={false}
          text="Characters"
          subtitle="variety of mod chips & psionics to choose"
        />
        <Carousel animateChildren={animate}>
          {charactersContent.map(
            ({ characterImageUrl, id, title, description }, index) => {
              return (
                <div
                  className={`${
                    index === activeSlide ? "" : "opacity-0 "
                  }h-full flex justify-center items-stretch transtion-opacity duration-250 pointer-events-none`}
                  key={id}
                >
                  <div className="relative w-1/2  flex items-center">
                    <div className="absolute w-[50vw] right-[10%] -mt-[40%] ">
                      <Image
                        src={characterImageUrl}
                        width="907px"
                        height="1506px"
                        alt={title}
                        className={`${
                          index === activeSlide ? "" : "brightness-0 "
                        } transition-filter duration-[416ms]`}
                      />
                    </div>
                  </div>
                  <div className="w-1/2 flex items-end">
                    <div className="relative inline-block px-9 py-8">
                      <span
                        className="
                          absolute inline-block h-full w-8 inset-y-0 left-0
                          before:content-[''] before:border-t-2 before:border-l-2 
                          before:border-primary before:absolute before:w-full before:h-8 
                          before:top-0 before:inset-x-0 after:content-[''] after:border-b-2 
                          after:border-l-2 after:border-primary after:absolute after:w-full 
                          after:h-8 after:bottom-0 after:inset-x-0"
                      ></span>
                      <div className="bg-secondary py-12 px-[4.375rem]">
                        <h2>{title}</h2>
                        <p className="">{description}</p>
                      </div>
                      <span
                        className="
                          absolute inline-block h-full w-8 inset-y-0 right-0 
                          before:content-[''] before:border-t-2 before:border-r-2 
                          before:border-primary before:absolute before:w-full before:h-8 
                          before:top-0 before:inset-x-0 after:content-[''] after:border-b-2 
                          after:border-r-2 after:border-primary after:absolute after:w-full 
                          after:h-8 after:bottom-0 after:inset-x-0"
                      ></span>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </Carousel>
      </div>
    </section>
  );
};

export default CharactersSlider;
