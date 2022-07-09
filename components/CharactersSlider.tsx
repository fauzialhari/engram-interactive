import { useState, useCallback } from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import AnimatedHeader from "./AnimatedHeader";
import FuturisticEdge from "./FuturisticEdge";
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
                    <div
                      className={`absolute w-[50vw] right-[10%] -mt-[40%] transition-transform duration-[416ms] delay-75 ease-out ${
                        index === activeSlide ? "" : "-translate-x-[8%]"
                      }`}
                    >
                      <Image
                        src={characterImageUrl}
                        width="907px"
                        height="1506px"
                        alt={title}
                        className={`${
                          index === activeSlide ? "" : "brightness-50 "
                        } transition-filter duration-[416ms] delay-75 ease-out`}
                      />
                    </div>
                  </div>
                  <div className="w-1/2 flex items-end">
                    <div
                      className={`relative inline-block px-9 py-8 transition-transform duration-[416ms] delay-75 ease-out  ${
                        index === activeSlide ? "" : "scale-[0.25]"
                      }`}
                    >
                      <FuturisticEdge>
                        <div className="bg-secondary py-12 px-[4.375rem]">
                          <article
                            className={`transition-opacity duration-[167ms] delay-[333ms] ease-out  ${
                              index === activeSlide ? "" : "opacity-0"
                            }`}
                          >
                            <h2>{title}</h2>
                            <p className="">{description}</p>
                          </article>
                        </div>
                      </FuturisticEdge>
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
