import { Phone } from "lucide-react";

import { TextButton } from "../buttons/text-button";

export const Header = () => {
  return (
    <div className="w-full border border-black h-24 flex justify-between items-center px-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-lime-700">B.A.S.E.</h1>
        {/* <h2 className="text-sm text-lime-700">
          Bournemouth Army Surplus Equipment & Base Kit
        </h2> */}
      </div>
      <div className="flex items-center gap-16">
        <div className="flex gap-2 items-center">
          <Phone size={18}/>
          <h2 className="font-medium">01202 535555</h2>
        </div>
        <TextButton path="/">HOME</TextButton>
        <TextButton path="/about">ABOUT</TextButton>
        <TextButton path="/contact">CONTACT</TextButton>
      </div>
    </div>
  );
};
