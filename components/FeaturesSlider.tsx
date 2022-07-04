import { useState, useCallback } from "react";
import Image from "next/image";
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
    <Carousel animateChildren={animate}>
      {featureImages.map(({ url, id, title }, index) => {
        return (
          <div
            className={`${
              index === activeSlide ? "" : "opacity-0 "
            }h-full flex justify-center items-center transtion-opacity duration-250`}
            key={id}
          >
            <Image src={url} width="1260" height="637" alt={title} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default FeaturesSlider;
