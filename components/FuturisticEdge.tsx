import { ReactNode } from "react";
const FuturisticEdge: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <>
      <span
        className="
      absolute inline-block h-full w-6 inset-y-0 left-0
      before:content-[''] before:border-t-4 before:border-l-4 before:border-primary before:absolute before:w-full before:h-6 before:top-0 before:inset-x-0
      after:content-[''] after:border-b-4 after:border-l-4 after:border-primary after:absolute after:w-full after:h-6 after:bottom-0 after:inset-x-0"
      ></span>
      {children}
      <span
        className="
      absolute inline-block h-full w-6 inset-y-0 right-0
      before:content-[''] before:border-t-4 before:border-r-4 before:border-primary before:absolute before:w-full before:h-6 before:top-0 before:inset-x-0
      after:content-[''] after:border-b-4 after:border-r-4 after:border-primary after:absolute after:w-full after:h-6 after:bottom-0 after:inset-x-0"
      ></span>
    </>
  );
};
export default FuturisticEdge;
