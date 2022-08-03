import Image from "next/image";
import { useRef } from "react";
import OneScreenContainer from "./OneScreenContainer";
import useOnScrollEffect from "../utils/useOnScrollEffect";
const Story: React.FC<{
  title: string;
  background: string;
  children: JSX.Element;
}> = ({ title = "Story", background, children }) => {
  const imageParentRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLDivElement>(null);

  function animateStory() {
    if (imageParentRef.current != null && articleRef.current != null) {
      const imageElement = imageParentRef.current.querySelector(
        "img.clip-path-right"
      ) as HTMLElement | null;
      if (imageElement != null) {
        imageElement.style.clipPath = "inset(0 0 0 0)";
      }
      articleRef.current.classList.remove("opacity-0");
    }
  }

  useOnScrollEffect(articleRef, animateStory);
  return (
    <OneScreenContainer id="story">
      <section className="relative w-full h-full">
        <div ref={imageParentRef} className="absolute w-full h-full inset-0">
          <Image
            src={background}
            alt=""
            width="1920"
            height="963"
            objectFit="cover"
            layout="fill"
            className="clip-path-right w-full h-full"
          />
        </div>
        <article
          ref={articleRef}
          className="mx-auto absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full max-w-sm md:max-w-md lg:max-w-lg transition-opacity opacity-0"
        >
          <h1 className="text-center">{title}</h1>
          {children}
        </article>
      </section>
    </OneScreenContainer>
  );
};

export default Story;
