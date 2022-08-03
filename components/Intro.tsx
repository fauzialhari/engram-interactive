import { useRef } from "react";
import FuturisticEdge from "./FuturisticEdge";
import useOnScrollEffect from "../utils/useOnScrollEffect";
const Intro: React.FC<{
  text: string;
}> = ({ text}) => {
  const containerIntroRef = useRef<HTMLDivElement>(null);
  const textIntroRef = useRef<HTMLDivElement>(null);

  function animateIntro() {
    if (containerIntroRef.current != null && textIntroRef.current != null) {
      containerIntroRef.current.classList.remove("invisible");
      textIntroRef.current.classList.add("max-w-screen-2xl");
      textIntroRef.current.classList.remove("max-w-xs");
      textIntroRef.current.classList.remove("invisible");
    }
  }

  useOnScrollEffect(containerIntroRef, animateIntro);
  return (
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
              {text}
            </p>
          </FuturisticEdge>
        </div>
      </div>
  );
};

export default Intro;
