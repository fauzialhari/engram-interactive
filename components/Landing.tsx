import Image from "next/image";
import LaserRainBackdrop from "./LaserRainBackdrop";

const Landing: React.FC<{}> = () => {
  return (
    <section className="mx-auto relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-44">
      <LaserRainBackdrop />
      <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="mb-80">
          <Image
            src="/assets/fractured-core-logo.png"
            width={1265}
            height={155}
            alt="Fractured core logo"
          />
        </div>
        <button role="button">Play Now</button>
      </div>
    </section>
  );
};

export default Landing;
