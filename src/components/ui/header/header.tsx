import { Phone } from "lucide-react";

import { TextButton } from "../buttons/text-button";
import { Link } from "react-router-dom";
import { Button } from "../buttons/button";

export const Header = () => {
  return (
    <div className="w-full flex justify-center bg-white border-b border-slate-200 sticky top-0 z-20">
      <div className="w-full 2xl:w-[1400px] h-20 flex justify-between items-center px-6 lg:px-16">
        <div className="flex flex-col justify-center items-center">
          <Link to="/">
            <h1 className="text-black text-3xl lg:text-5xl armyHeader">B.A.S.E.</h1>
          </Link>
        </div>
        <div className="flex items-center gap-3 lg:gap-10 text-black">
          <div className="hidden lg:flex gap-2 items-center">
            <Phone size={18} />
            <h2 className="font-medium">01202 535555</h2>
          </div>
          <TextButton path="/">HOME</TextButton>
          <TextButton path="/about">ABOUT</TextButton>
          <Button path="/contact">CONTACT</Button>
        </div>
      </div>
    </div>
  );
};
