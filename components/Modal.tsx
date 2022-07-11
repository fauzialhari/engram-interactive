import {
  KeyboardEvent,
  useRef,
  MouseEvent,
  useEffect,
  SyntheticEvent,
} from "react";
import FuturisticEdge from "./FuturisticEdge";
import getElementRef from "../utils/getElementRef";
const Modal: React.FC<{
  title: string;
  date: string;
  content: string;
  exit: () => void;
}> = ({ title, date, content, exit }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    getElementRef(containerRef).focus();
  }, []);
  function onBackdropClick(event: MouseEvent) {
    if (event.target === containerRef.current) {
      exit();
    }
  }
  function onKeyEscapePressed(event: KeyboardEvent) {
    if (event.key === "Escape") {
      exit();
    }
  }
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 backdrop-blur flex justify-center items-center"
      tabIndex={0}
      onClick={onBackdropClick}
      onKeyUp={onKeyEscapePressed}
    >
      <div className="absolute w-10/12 h-4/5 px-9 py-8 ">
        <FuturisticEdge>
          <div className="h-full bg-tertiary px-44 py-32 overflow-auto overscroll-contain">
            <h2 className="text-primary font-normal">{title}</h2>
            <h2 className="text-primary font-normal text-right">{date}</h2>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </FuturisticEdge>
      </div>
    </div>
  );
};

export default Modal;
