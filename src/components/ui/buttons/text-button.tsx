import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface TextButtonProps {
  children: ReactNode;
  path: string;
}

export const TextButton = ({ children, path }: TextButtonProps) => {
  return (
    <button className="font-semibold text-base hover:text-lime-700 duration-300">
      <NavLink
        to={path}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-lime-700" : ""
        }
      >
        {children}
      </NavLink>
    </button>
  );
};
