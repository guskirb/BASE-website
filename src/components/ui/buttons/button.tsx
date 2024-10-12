import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface TextButtonProps {
  children: ReactNode;
  path: string;
}

export const Button = ({ children, path }: TextButtonProps) => {
  return (
    <button className="py-2 px-4 lg:py-3 lg:px-5 rounded duration-300 bg-lime-800 hover:bg-lime-900 text-white font-semibold z-10">
      <Link to={path}>{children}</Link>
    </button>
  );
};
