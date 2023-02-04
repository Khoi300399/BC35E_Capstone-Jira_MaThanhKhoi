import React from "react";
export type Props = {
  children?: JSX.Element | React.ReactNode;
  placeholder?: string;
  className?: string;
  show?: boolean;
  onClick?: () => void;
  dataDel?: () => void;
  removeUser?: any;
  clearListUser?: any;
  nodeRef?: any;
  data?: any[];

  searchFilter?: (e: React.FormEvent<HTMLInputElement>) => void;
};
const Dropdown = ({ children }: Props) => {
  return <div className="relative ">{children}</div>;
};

export default Dropdown;
