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
  const [activeSlide, setActiveSlide] = useState(0);
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
                    index === activeSlide ? "" : "hidden "
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
                      />
                    </div>
                  </div>
                  <div className="relative w-1/2">
                    <div className="absolute">
                      <h2>{title}</h2>
                      {description}
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
