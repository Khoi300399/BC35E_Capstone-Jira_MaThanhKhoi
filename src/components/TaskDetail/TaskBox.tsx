import React from "react";
import { useDrop } from "react-dnd";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/config";
import { ItemType } from "../../types/global";

type Props = {
  children: React.ReactNode;
  name: string;
  id: string;
};

const TaskBox = ({ children, name, id }: Props) => {
  const colorText =
    id === "1"
      ? "text-blue-500"
      : id === "2"
      ? "text-orange-500"
      : id === "3"
      ? "text-red-500"
      : "text-green-500";
  const colorBg =
    id === "1"
      ? "bg-blue-200"
      : id === "2"
      ? "bg-orange-200"
      : id === "3"
      ? "bg-red-200"
      : "bg-green-200";
  const icon = id === "1" ? "🌞" : id === "2" ? "📝" : id === "3" ? "⏳" : "✅";

  const { statuses } = useSelector((state: RootState) => state.statusReducer);

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemType.BOX,
    drop: () => ({ name }),
    canDrop: (item: any, monitor) => {
      // console.log("item canDrop", item);
      const itemIndex = statuses.findIndex(
        (si) => si.statusName === item.statusName
      );
      const statusIndex = statuses.findIndex((si) => si.statusName === name);
      return [
        itemIndex + 1,
        itemIndex - 1,
        itemIndex + 2,
        itemIndex - 2,
        itemIndex,
      ].includes(statusIndex);
    },
    hover: (item, monitor) => {},
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  // const isActive = isOver && canDrop;
  // console.log("isOver", isOver);
  console.log("canDrop", canDrop);

  return (
    <div
      ref={drop}
      className={`${
        canDrop ? "bg-error" : "bg-[rgba(9,30,66,0.04)]"
      }flex flex-col w-80 min-w-[280px] rounded-lg bg-[rgba(9,30,66,0.04)]`}
    >
      <div className={` ${colorBg} rounded px-3 py-1 flex items-center`}>
        <span
          className={`text-lg px-3 pt-3 pb-1 font-semibold ${colorText} leading-tight font-mono`}
        >
          {name + icon}
        </span>
      </div>
      <div className="flex-1 min-h-0">
        <ul className="pt-1 pb-3 px-3">{children}</ul>
      </div>
    </div>
  );
};

export default TaskBox;
