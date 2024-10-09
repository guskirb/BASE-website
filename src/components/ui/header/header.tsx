import { Phone } from "lucide-react";

export const Header = () => {
  return (
    <div className="w-full border border-black h-24 flex justify-between items-center px-8">
      <div className="flex flex-col justify-center items-center">
        <h1 className="">B.A.S.E.</h1>
        <h2 className="text-sm">
          Bournemouth Army Surplus Equipment & Base Kit
        </h2>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex gap-2">
          <Phone />
          <h2>01202 535555</h2>
        </div>
        <button>Home</button>
        <button>About</button>
        <button>Contact Us</button>
      </div>
    </div>
  );
};
