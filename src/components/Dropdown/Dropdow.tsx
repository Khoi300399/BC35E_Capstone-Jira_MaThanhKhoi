import React from "react";
export type Props = {
  children?: JSX.Element | React.ReactNode;
  placeholder?: string;
  className?: string;
  show?: boolean;
  onClick?: any;
  nodeRef?: any;
};
const Dropdown = ({ children, nodeRef }: Props) => {
  return (
    <div className="relative inline-block w-full" ref={nodeRef}>
      {children}
    </div>
  );
};

export default Dropdown;
