import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: JSX.Element | React.ReactNode;
  type: string | any;
  className?: string;
  isLoading?: boolean;
  href?: string;
  kind?: string;
};

const Button = ({
  children,
  className = "",
  isLoading = false,
  ...rest
}: Props) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 rounded-full p-4 border-4 border-white border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );

  let defaultClassName =
    "p-4 text-base font-semibold rounded-xl flex items-center justify-center min-h-[56px]";
  switch (rest.kind) {
    case "primary":
      defaultClassName = defaultClassName + " bg-primary text-white";
      break;

    case "secondary":
      defaultClassName =
        defaultClassName + " bg-secondary bg-opacity-20 text-secondary";
      break;

    default:
      break;
  }
  if (rest.href)
    return (
      <Link to={rest.href} className={defaultClassName + " " + className}>
        {children}
      </Link>
    );
  return (
    <button
      className={`${
        defaultClassName +
        " " +
        (!!isLoading ? "opacity-50 pointer-events-none" : "")
      } ${className}`}
      {...rest}
    >
      {child}
    </button>
  );
};

export default Button;
