import { useState, useCallback } from "react";
import Image from "next/image";
import OneScreenContainer from "./OneScreenContainer";
import AnimatedHeader from "./AnimatedHeader";
import Carousel from "./Carousel";
const FeaturesSlider: React.FC<{
  title: string;
  subtitle: string;
  featureImages: {
    url: string;
    id: string;
    title: string;
  }[];
}> = ({ featureImages, title = "Features", subtitle }) => {
  return (
    <OneScreenContainer>
      <div className="container mx-auto h-full w-full flex items-center">
        <section id="features" className="px-11 lg:px-64 w-full">
          <AnimatedHeader text={title} subtitle={subtitle} />
          <Carousel isSlideEffect={true}>
            {featureImages.map(({ url, id, title }) => {
              return (
                <div
                  className="h-full flex justify-center items-center transition-opacity duration-250`"
                  key={id}
                >
                  <Image
                    src={url}
                    width="945"
                    height="477"
                    objectFit="contain"
                    alt={title}
                  />
                </div>
              );
            })}
          </Carousel>
        </section>
      </div>
    </OneScreenContainer>
  );
};

export default FeaturesSlider;
