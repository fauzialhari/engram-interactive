import { useState, useCallback } from "react";
import Image from "next/image";
import AnimatedHeader from "./AnimatedHeader";
import Carousel from "./Carousel";
const FeaturesSlider: React.FC<{
  featureImages: {
    url: string;
    id: string;
    title: string;
  }[];
}> = ({ featureImages }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const animate = useCallback((CarouselActiveSlide: number) => {
    setActiveSlide(CarouselActiveSlide);
  }, []);
  return (
    <section className="px-24 mb-[26rem]">
      <AnimatedHeader
        text="Features"
        subtitle="variety of mod chips & psionics to choose"
      />
      <Carousel animateChildren={animate}>
        {featureImages.map(({ url, id, title }, index) => {
          return (
            <div
              className={`${
                index === activeSlide ? "" : "opacity-0 "
              }h-full flex justify-center items-center transition-opacity duration-250`}
              key={id}
            >
              <Image src={url} width="1260" height="637" objectFit="contain" alt={title} />
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default FeaturesSlider;
