import Image from "next/image";
import LaserRainBackdrop from "./LaserRainBackdrop";

const Landing: React.FC<{}> = () => {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-32">
      <LaserRainBackdrop />
      <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="mb-60">
          <Image
            src="/assets/fractured-core-logo.png"
            width={2500}
            height={305}
            alt="Fractured core logo"
          />
        </div>
        <button role="button">Play Now</button>
      </div>
    </section>
  );
};

export default Landing;
