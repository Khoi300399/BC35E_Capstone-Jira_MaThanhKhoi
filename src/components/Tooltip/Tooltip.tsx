import React from "react";
import useGetElementCoords from "../../hooks/useGetElementCoords";
import useHover from "../../hooks/useHover";
import TooltipContent from "./TooltipContent";

type Props = {
  children?: React.ReactNode;
  text?: string;
};

const Tooltip = ({ children, text }: Props) => {
  const { hovered, nodeRef } = useHover();
  const { coords, handleGetElementCoords } = useGetElementCoords();

  const handleHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleGetElementCoords(e);
  };
  return <div>{children}</div>;
};

export default Tooltip;
