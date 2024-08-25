import { title } from "process";
import React from "react";

interface ButtonProps {
  size: string;
  type: string;
  handleClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ type, size, handleClick, children }: ButtonProps) => {
  return (
    <button
      className={` px-8 py-2 text-white  rounded-lg transition-all cursor-pointer duration-300
        ${size === "big" ? "px-8 py-2" : "px-4 py-2"}
        ${type === "primary" ? "bg-primary-500 hover:bg-primary-500/80" : ""}
         ${type === "accent" ? "bg-accent-500 hover:bg-accent-500/80" : ""}
          ${type === "neutral" ? "bg-black hover:bg-black/80" : ""}
        `}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
