import Image from "next/image";
import { useRef, useState } from "react";
import useOnScrollEffect from "../utils/useOnScrollEffect";
import AnimatedHeader from "./AnimatedHeader";

const Gallery: React.FC<{
  images: {
    url: string;
    title: string;
    id: string;
  }[];
  title: string;
}> = ({ images, title="Gallery" }) => {
  const imagesContainer = useRef(null);
  const [animating, setAnimating] = useState(false);
  useOnScrollEffect(imagesContainer, () => setAnimating(true));
  const calculateDelayClass = (index: number) =>{
      if (index < 3) {
          return "delay-[166ms]";
      } else if (index <6) {
          return "delay-[333ms]";
      } else {
        return "delay-[500ms]";
      }
    }
  return (
    <section id="gallery" className="px-24 mb-96">
      <AnimatedHeader text={title} />
      <div ref={imagesContainer} className="grid grid-cols-3 gap-12">
        {images.map(({ url, title, id }, index) =>
          index < 9 ? (
            <a
              key={id}
              href="#"
              aria-label="show"
              className={`transition-all duration-[333ms] ${calculateDelayClass(
                index
              )} ${animating ? "" : "translate-y-3.5 opacity-0"}`}
            >
              <Image src={url} width={478} height={293} alt={title} />
            </a>
          ) : null
        )}
      </div>
    </section>
  );
};

export default Gallery;
