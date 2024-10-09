import { Link } from "react-router-dom";

interface TextButtonProps {
  text: string;
  path: string;
}

export const Button = ({ text, path }: TextButtonProps) => {
  return (
    <button>
      <Link to={path}>{text}</Link>
    </button>
  );
};
