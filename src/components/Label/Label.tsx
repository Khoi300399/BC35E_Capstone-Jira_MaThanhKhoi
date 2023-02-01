import React from "react";

type Props = {
  children: JSX.Element | React.ReactNode;
  htmlFor?: string;
};

const Label = (props: Props) => {
  const { children, htmlFor = "" } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm text-left font-medium  text-text2 dark:text-text3 cursor-pointer inline-block mt-5"
    >
      {children}
    </label>
  );
};

export default Label;
