import { Phone } from "lucide-react";

import { TextButton } from "../buttons/text-button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="w-full 2xl:w-[1400px] h-24 flex justify-between items-center px-8 lg:px-16">
      <div className="flex flex-col justify-center items-center">
        <Link to="/">
          <h1 className="text-lime-700 text-2xl lg:text-4xl">B.A.S.E.</h1>
        </Link>
      </div>
      <div className="flex items-center gap-5 lg:gap-16">
        <div className="hidden lg:flex gap-2 items-center">
          <Phone size={18} />
          <h2 className="font-medium">01202 535555</h2>
        </div>
        <TextButton path="/">HOME</TextButton>
        <TextButton path="/about">ABOUT</TextButton>
        <TextButton path="/contact">CONTACT</TextButton>
      </div>
    </div>
  );
};
