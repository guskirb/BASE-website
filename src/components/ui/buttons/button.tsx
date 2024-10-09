import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface TextButtonProps {
  children: ReactNode;
  path: string;
}

export const Button = ({ children, path }: TextButtonProps) => {
  return (
    <button className="py-2 px-4 border rounded-lg bg-lime-700 text-white font-semibold">
      <Link to={path}>{children}</Link>
    </button>
  );
};
