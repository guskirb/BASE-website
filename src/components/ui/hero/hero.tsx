import { LazyLoadImage } from "react-lazy-load-image-component";

import camoBg from "../../../assets/camo-bg.jpg";
import camoBgPlaceholder from "../../../assets/camo-bg-placeholder.jpg";
import { Button } from "../buttons/button";

export const Hero = () => {
  return (
    <div className="w-full bg-black h-[400px]  lg:h-[580px] flex flex-col gap-5 justify-center items-center text-white relative">
      <h1 className="lg:text-7xl armyHeader z-10">B.A.S.E.</h1>
      <div className="flex flex-col justify-center items-center z-10">
        <h2 className="lg:text-3xl text-center font-light">
          Bournemouth Army Surplus Equipment <br />& Base Kit
        </h2>
      </div>
      <div className="z-10 flex gap-3">
        <Button path="/about">Discover More</Button>
        <Button path="/contact">Contact Us</Button>
      </div>
      <LazyLoadImage
        src={camoBg}
        placeholderSrc={camoBgPlaceholder}
        wrapperClassName="heroBg"
      />
    </div>
  );
};
