import React, { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Link } from "react-router-dom";
import { Avatar, Tooltip } from "antd";
import { COLUMN_NAMES, ItemType } from "../../types/global";
import { DropResult } from "../../types/global";
import { TaskModel } from "../../pages/Project/ProjectDetail";

type Props = {
  index: number;

  status: TaskModel;
  changeStatusName: (currentItem: TaskModel, columnNextMove: string) => void;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
};

const TaskCard = ({ index, status, changeStatusName, moveItem }: Props) => {
  const { id, name, statusName, priority, taskType } = status;

  const [, drop] = useDrop(() => ({
    accept: ItemType.BOX,
    hover(item: any, monitor) {
      // console.log("item hover", item);
      // console.log("index", index);

      const dragIndex = item.index;
      const hoverIndex = index;

      // console.log("dragIndex", dragIndex);
      // console.log("hoverIndex", hoverIndex);

      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex + 1;
    },
  }));

  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: ItemType.BOX,
    item: {
      index,
      id,
      name,
      statusName,
      priority,
      taskType,
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult() as DropResult;
      // console.log("item", item);
      if (item && dropResult) {
        const { name } = dropResult;

        // Change statusName = name column next
        // console.log("item", item);
        changeStatusName(item, name);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  let colorPriority: string =
    priority === "High"
      ? "bg-[#e65100]"
      : priority === "Medium"
      ? "bg-[#f9d900]"
      : "bg-[#2ecd6f]";
  let colorTaskType: string = taskType === "bug" ? "error" : "secondary";

  let colorBg =
    statusName === "BACKLOG"
      ? "bg-blue-200"
      : statusName === "IN PROGRESS"
      ? "bg-red-200"
      : statusName === "DONE"
      ? "bg-green-200"
      : "bg-orange-200";
  return isDragging ? (
    <div
      className={`shadow rounded-md border-2 border-gray-400 border-dashed ${colorBg} `}
    >
      <li ref={dragPreview} className={`my-2  p-5 cursor-grabbing`}>
        <div className="flex flex-col gap-y-5 opacity-0">
          <div className="flex items-start justify-between">
            <div className="w-[65%]">
              <span>{name}</span>
            </div>
            <div>
              <span>{taskType}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span>{priority}</span>
            </div>
          </div>
        </div>
      </li>
    </div>
  ) : (
    <div>
      <li
        ref={drag}
        className="my-2 bg-white border-2 border-dashed border-transparent p-5 shadow rounded-md cursor-grab "
      >
        <div className="flex flex-col gap-y-5 ">
          <div className="flex items-start justify-between">
            <div className="w-[65%]">
              <span className="text-base font-medium text-text5">{name}</span>
            </div>
            <div>
              <span
                className={`px-2 py-1 text-xs text-${colorTaskType} bg-${colorTaskType} bg-opacity-20 font-medium rounded-lg`}
              >
                {taskType}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span
                className={`${colorPriority} w-auto text-white text-xs font-semibold rounded-sm  px-2 py-1`}
              >
                {priority}
              </span>
            </div>
            <Avatar.Group
              maxCount={2}
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
              }}
            >
              <Avatar style={{ backgroundColor: "#f56a00" }}>Khôi</Avatar>
              <Tooltip className="mx-1" title="Ant User" placement="top">
                <Avatar style={{ backgroundColor: "#f56a00" }}>Khôi</Avatar>
              </Tooltip>
              <Tooltip className="mx-1" title="Ant User" placement="top">
                <Avatar style={{ backgroundColor: "#f56a00" }}>Khôi</Avatar>
              </Tooltip>
              <Tooltip className="mx-1" title="Ant User" placement="top">
                <Avatar style={{ backgroundColor: "#f56a00" }}>Khôi</Avatar>
              </Tooltip>
            </Avatar.Group>
          </div>
        </div>
      </li>
    </div>
  );
};

export default TaskCard;
