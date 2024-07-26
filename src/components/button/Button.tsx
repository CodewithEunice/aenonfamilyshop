import { title } from "process";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className=" mt-10 px-10
        py-2 text-white bg-blue-400
         rounded-full"
    >
      {children}
    </button>
  );
};

export default Button;
