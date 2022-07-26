import { ReactNode } from "react";
const OneScreenContainer: React.FC<{ children?: ReactNode; id?: string }> = ({
  children,
  id,
}) => {
  return (
    <div
      id={id}
      className="w-screen h-screen min-h-screen left-1/2 right-1/2 -mx-[50vw] relative mb-12 lg:mb-32"
    >
      {children}
    </div>
  );
};
export default OneScreenContainer;
