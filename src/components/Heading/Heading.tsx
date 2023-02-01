import React from "react";
import { Props } from "../Dropdown/Dropdow";

const Heading = ({ children, className }: Props) => {
  return (
    <div className={`text-lg font-semibold text-text1 mb-5 ${className}`}>
      {children}
    </div>
  );
};

export default Heading;
