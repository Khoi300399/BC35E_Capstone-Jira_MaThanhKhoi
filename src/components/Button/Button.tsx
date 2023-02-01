import React from "react";

type Props = {
  children: JSX.Element | React.ReactNode;
  type: string | any;
  className?: string;
  isLoading?: boolean;
};

const Button = ({
  children,
  className = "",
  isLoading = false,
  ...rest
}: Props) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent border-b-transparent  animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      className={`py-4 text-base font-semibold rounded-xl flex items-center justify-center ${
        !!isLoading ? "opacity-50 pointer-events-none " : ""
      } ${className}`}
      {...rest}
    >
      {child}
    </button>
  );
};

export default Button;
