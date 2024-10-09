import { Link } from "react-router-dom";

interface TextButtonProps {
  text: string;
  path: string;
}

export const TextButton = ({ text, path }: TextButtonProps) => {
  return (
    <button>
      <Link to={path}>{text}</Link>
    </button>
  );
};
