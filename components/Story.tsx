import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
const Story: React.FC<{
  intro: string;
  title: string;
  background: string;
  children: JSX.Element;
}> = ({ intro, title, background, children }) => {
  const containerIntroRef = useRef<HTMLDivElement>(null);
  const textIntroRef = useRef<HTMLDivElement>(null);
  const imageParentRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLDivElement>(null);
  
  function animate() {
    if (containerIntroRef.current != null && textIntroRef.current != null && imageParentRef.current != null && articleRef.current != null) {
      containerIntroRef.current.classList.remove("invisible");
      textIntroRef.current.classList.add("max-w-screen-2xl");
      textIntroRef.current.classList.remove("max-w-xs");
      textIntroRef.current.classList.remove("invisible");
      const imageElement = imageParentRef.current.querySelector("img.clip-path-right") as HTMLElement | null;
      if (imageElement != null) {
          imageElement.style.clipPath = "inset(0 0 0 0)"
      }
      articleRef.current.classList.remove("opacity-0")
    }
  }
  return (
    <section
      className="mx-auto relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-44"
      onClick={animate}
    >
      <div className="mb-52 text-center uppercase">
        <div
          ref={containerIntroRef}
          className="inline-block px-16 py-12 relative invisible"
        >
          <span
            className="
            absolute inline-block h-full w-8 inset-y-0 left-0
            before:content-[''] before:border-t-2 before:border-l-2 before:border-primary before:absolute before:w-full before:h-8 before:top-0 before:inset-x-0
            after:content-[''] after:border-b-2 after:border-l-2 after:border-primary after:absolute after:w-full after:h-8 after:bottom-0 after:inset-x-0"
          ></span>
          <p
            ref={textIntroRef}
            className="tracking-[0.2em] whitespace-nowrap overflow-hidden transition-maxwidth max-w-xs invisible"
          >
            {intro}
          </p>
          <span
            className="
            absolute inline-block h-full w-8 inset-y-0 right-0
            before:content-[''] before:border-t-2 before:border-r-2 before:border-primary before:absolute before:w-full before:h-8 before:top-0 before:inset-x-0
            after:content-[''] after:border-b-2 after:border-r-2 after:border-primary after:absolute after:w-full after:h-8 after:bottom-0 after:inset-x-0"
          ></span>
        </div>
      </div>
      <div className="relative">
        <div ref={imageParentRef}>
          <Image
            src={background}
            alt=""
            width="1920"
            height="963"
            objectFit="cover"
            className="clip-path-right"
          />
        </div>
        <article ref={articleRef} className="mx-auto absolute inset-y-[15%] w-full transition-opacity opacity-0">
          <div className="container mx-auto">
            <h1 className="text-center">{title}</h1>
            {children}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Story;
