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
    "text-base font-semibold rounded-xl flex items-center justify-center cursor-pointer";

  switch (rest.kind) {
    case "primary":
      defaultClassName =
        defaultClassName +
        " bg-gradient-to-r from-[#00a7b4] to-[#a4d96c] text-white p-4 min-h-[56px]";
      break;

    case "secondary":
      defaultClassName =
        defaultClassName +
        " bg-secondary bg-opacity-20 text-secondary p-4 min-h-[56px]";
      break;

    case "cancel":
      defaultClassName =
        defaultClassName +
        " bg-stock border border-strock text-text2 px-2 py-1 font-mono";
      break;

    case "success":
      defaultClassName =
        defaultClassName + " bg-blue-500 text-white px-2 py-1 font-mono";
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
      className={`cursor-pointer ${
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
