import React from "react";
import { Props } from "./Dropdow";

const Option = ({ children, onClick }: Props) => {
  return (
    <div
      className="py-4 px-5 cursor-pointer flex items-center justify-between hover:bg-opacity-20  hover:bg-primary hover:text-primary transition-all ease-linear  text-sm"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Option;
