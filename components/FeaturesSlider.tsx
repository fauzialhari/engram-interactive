import { useState } from "react";
import Image from "next/image";
import OneScreenContainer from "./OneScreenContainer";
import AnimatedHeader from "./AnimatedHeader";
import Carousel from "./Carousel";
const FeaturesSlider: React.FC<{
  title: string;
  featureImages: {
    url: string;
    id: string;
    title: string;
    subtitle: string;
  }[];
}> = ({ featureImages, title = "Features" }) => {
  const [subtitle, setSubtitle] = useState("");
  function setActiveSubtitle(activeSlide: number) {
    setSubtitle(featureImages[activeSlide].subtitle);
  }
  return (
    <OneScreenContainer id="features">
      <div className="container mx-auto h-full w-full flex items-center">
        <section className="px-11 lg:px-0 w-full">
          <div className="lg:max-w-[66%] mx-auto">
            <AnimatedHeader text={title} subtitle={subtitle} />
            <Carousel isSlideEffect={true} animateChildren={setActiveSubtitle}>
              {featureImages.map(({ url, id, title }) => {
                return (
                  <div
                    className="h-full flex justify-center items-center transition-opacity duration-250`"
                    key={id}
                  >
                    <Image
                      src={url}
                      width={2486}
                      height={1255}
                      objectFit="contain"
                      alt={title}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </section>
      </div>
    </OneScreenContainer>
  );
};

export default FeaturesSlider;
