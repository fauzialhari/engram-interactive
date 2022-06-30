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
  return (
    <section
      className="mx-auto relative w-screen left-1/2 right-1/2 -mx-[50vw]"
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
    </section>
};

export default Story;
