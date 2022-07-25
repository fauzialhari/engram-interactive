import { useState, useCallback } from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import OneScreenContainer from "./OneScreenContainer";
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
    <OneScreenContainer>
      <div className="h-full w-full flex items-center bg-secondarybg">
        <div className="container mx-auto">
          <section
            id="characters"
            className="relative w-full px-11 lg:px-64"
          >
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
                      <div className="w-2/3 lg:w-1/2 flex items-end">
                        <div
                          className={`relative inline-block px-3 py-3 lg:px-7 lg:py-6 transition-transform duration-[416ms] delay-75 ease-out  ${
                            index === activeSlide ? "" : "scale-[0.25]"
                          }`}
                        >
                          <FuturisticEdge>
                            <div className="bg-secondary py-3 px-3 lg:py-9 lg:px-[3.28rem]">
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
                      <div className="relative w-1/3 lg:w-1/2  flex items-center">
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
          </section>
        </div>
      </div>
    </OneScreenContainer>
  );
};

export default CharactersSlider;
