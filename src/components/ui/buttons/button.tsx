import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface TextButtonProps {
  children: ReactNode;
  path: string;
}

export const Button = ({ children, path }: TextButtonProps) => {
  return (
    <Link to={path}>
      <button className="py-2 px-4 lg:py-3 lg:px-6 duration-300 bg-lime-900 hover:bg-lime-800 text-white z-10">
        {children}
      </button>
    </Link>
  );
};
