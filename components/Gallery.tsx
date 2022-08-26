import Image from "next/image";
import { useRef, useState } from "react";
import useOnScrollEffect from "../utils/useOnScrollEffect";
import OneScreenContainer from "./OneScreenContainer";
import AnimatedHeader from "./AnimatedHeader";
import Modal from "./Modal";

const Gallery: React.FC<{
  images: {
    url: string;
    title: string;
    id: string;
  }[];
  title: string;
}> = ({ images, title = "Gallery" }) => {
  const imagesContainer = useRef(null);
  const [animating, setAnimating] = useState(false);
  const [activeImage, setActiveImage] = useState(-1);
  useOnScrollEffect(imagesContainer, () => setAnimating(true));
  const calculateDelayClass = (index: number) => {
    if (index < 3) {
      return "delay-[166ms]";
    } else if (index < 6) {
      return "delay-[333ms]";
    } else {
      return "delay-[500ms]";
    }
  };
  return (
    <OneScreenContainer id="gallery">
      <div className="container mx-auto h-full w-full flex items-center">
        <section className="px-5 lg:px-0 w-full">
          <div className="lg:max-w-[66%] mx-auto">
            <AnimatedHeader text={title} />
            <div
              ref={imagesContainer}
              className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4"
            >
              {images.map(({ url, title, id }, index) =>
                index < 9 ? (
                  <a
                    key={id}
                    href=""
                    aria-label="show"
                    className={`transition-all duration-[333ms] ${calculateDelayClass(
                      index
                    )} ${animating ? "" : "translate-y-3.5 opacity-0"}`}
                    onClick={(event) => {
                      event.preventDefault();
                      setActiveImage(index)
                    }}
                  >
                    <Image src={url} width={942} height={578} alt={title} />
                  </a>
                ) : null
              )}
            </div>
          </div>
          {activeImage >= 0 ? (
            <Modal
              content={`
                <div class="absolute h-full w-full flex justify-center align-middle">
                  <img loading="lazy" src="${images[activeImage].url}" alt="${images[activeImage].title}">
                </div>
              `}
              exit={() => setActiveImage(-1)}
            />
          ) : null}
        </section>
      </div>
    </OneScreenContainer>
  );
};

export default Gallery;
