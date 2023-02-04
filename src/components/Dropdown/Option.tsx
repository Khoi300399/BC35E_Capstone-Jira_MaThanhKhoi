import React from "react";
import { Props } from "./Dropdow";

const Option = ({
  children,
  onClick,
  className = "hover:bg-secondary hover:text-secondary hover:bg-opacity-20 ",
}: Props) => {
  return (
    <div
      className={`py-4 px-5 cursor-pointer flex items-center justify-between transition-all ease-linear text-sm ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Option;
