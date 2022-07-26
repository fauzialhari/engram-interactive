import Image from "next/image";
import { useRef } from "react";
import OneScreenContainer from "./OneScreenContainer";
import FuturisticEdge from "./FuturisticEdge";
import useOnScrollEffect from "../utils/useOnScrollEffect";
const Story: React.FC<{
  intro: string;
  title: string;
  background: string;
  children: JSX.Element;
}> = ({ intro, title = "Story", background, children }) => {
  const containerIntroRef = useRef<HTMLDivElement>(null);
  const textIntroRef = useRef<HTMLDivElement>(null);
  const imageParentRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLDivElement>(null);

  function animateIntro() {
    if (containerIntroRef.current != null && textIntroRef.current != null) {
      containerIntroRef.current.classList.remove("invisible");
      textIntroRef.current.classList.add("max-w-screen-2xl");
      textIntroRef.current.classList.remove("max-w-xs");
      textIntroRef.current.classList.remove("invisible");
    }
  }

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

  useOnScrollEffect(containerIntroRef, animateIntro);
  useOnScrollEffect(articleRef, animateStory);
  return (
    <>
      <div className="mb-12 lg:mb-36 text-center uppercase">
        <div
          ref={containerIntroRef}
          className="inline-block px-12 py-9 relative invisible"
        >
          <FuturisticEdge>
            <p
              ref={textIntroRef}
              className="tracking-[0.2em] mb-0 lg:whitespace-nowrap overflow-hidden transition-maxwidth max-w-xs invisible"
            >
              {intro}
            </p>
          </FuturisticEdge>
        </div>
      </div>
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
    </>
  );
};

export default Story;
