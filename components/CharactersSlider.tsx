import { useState, useCallback } from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import AnimatedHeader from "./AnimatedHeader";
import FuturisticEdge from "./FuturisticEdge";
const CharactersSlider: React.FC<{
  title?: string;
  subtitle?: string;
  charactersContent: {
    characterImageUrl: string;
    id: string;
    title: string;
    description: string;
  }[];
}> = ({ charactersContent, title = "Characters", subtitle }) => {
  const [activeSlide, setActiveSlide] = useState(-1);
  const animate = useCallback((CarouselActiveSlide: number) => {
    setActiveSlide(CarouselActiveSlide);
  }, []);
  return (
    <section
      id="characters"
      className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-32 bg-secondarybg pt-7 pb-[0.5px]"
    >
      <div className="container px-64 mx-auto">
        <AnimatedHeader text={title} subtitle={subtitle} />
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
                  <div className="w-1/2 flex items-end">
                    <div
                      className={`relative inline-block px-7 py-6 transition-transform duration-[416ms] delay-75 ease-out  ${
                        index === activeSlide ? "" : "scale-[0.25]"
                      }`}
                    >
                      <FuturisticEdge>
                        <div className="bg-secondary py-9 px-[3.28rem]">
                          <article
                            className={`transition-opacity duration-[167ms] delay-[333ms] ease-out  ${
                              index === activeSlide ? "" : "opacity-0"
                            }`}
                          >
                            <h2>{title}</h2>
                            <p className="line-clamp-[10]">{description}</p>
                          </article>
                        </div>
                      </FuturisticEdge>
                    </div>
                  </div>
                  <div className="relative w-1/2  flex items-center">
                    <div
                      className={`absolute w-[50vw] left-[10%] -mt-[40%] transition-transform duration-[416ms] delay-75 ease-out ${
                        index === activeSlide ? "" : "-translate-x-[8%]"
                      }`}
                    >
                      <Image
                        src={characterImageUrl}
                        width="680px"
                        height="1120px"
                        alt={title}
                        className={`${
                          index === activeSlide ? "" : "brightness-50 "
                        } transition-filter duration-[416ms] delay-75 ease-out`}
                      />
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
