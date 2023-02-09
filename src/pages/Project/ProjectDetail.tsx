import React, { useEffect, useState } from "react";
import { Avatar, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { DispathType, RootState } from "../../redux/config";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import Button from "../../components/Button/Button";
import TaskCard from "../../components/TaskDetail/TaskCard";
import TaskBox from "../../components/TaskDetail/TaskBox";
import { useDispatch, useSelector } from "react-redux";
import { getStatusApi } from "../../redux/statusReducer/statusReducer";

export interface TaskModel {
  id: number;
  name: string;
  statusName: string;
  priority: string;
  taskType: string;
}
export const tasks = [
  {
    id: 2,
    name: "Prepare a dish from a foreign culture",
    statusName: "SELECTED FOR DEVELOPMENT",
    priority: "High",
    taskType: "bug",
  },

  {
    id: 4,
    name: "Buy a new house decoration",
    statusName: "DONE",
    priority: "Medium",
    taskType: "bug",
  },
  {
    id: 3,
    name: "Organize pantry",
    statusName: "IN PROGRESS",
    priority: "Lowest",
    taskType: "new task",
  },
  {
    id: 6,
    name: "Use DummyJSON in the project",
    statusName: "IN PROGRESS",
    priority: "Medium",
    taskType: "bug",
  },
  {
    id: 1,
    name: "Do something nice for someone I care about",
    statusName: "BACKLOG",
    priority: "Low",
    taskType: "new task",
  },
  {
    id: 5,
    name: "Create a compost pile",
    statusName: "BACKLOG",
    priority: "High",
    taskType: "new task",
  },
];
type Props = {};

const ProjectDetail = (props: Props) => {
  const dispatch: DispathType = useDispatch();
  const { statuses } = useSelector((state: RootState) => state.statusReducer);
  useEffect(() => {
    const actionAsync = getStatusApi();
    dispatch(actionAsync);
  }, []);

  const [items, setItems] = useState<TaskModel[]>(tasks);

  function changeStatusName(currentItem: TaskModel, columnNextMove: string) {
    setItems((prevState) => {
      return prevState.map((item) => {
        return {
          ...item,
          statusName:
            item.id === currentItem.id ? columnNextMove : item.statusName,
        };
      });
    });
  }

  function moveItem(dragIndex: number, hoverIndex: number) {
    const dragItem = items[dragIndex];
    if (dragItem) {
      setItems((prevState) => {
        const coppiedStateArray = [...prevState];

        // remove item by "hoverIndex" and put "dragItem" instead
        const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

        // remove item by "dragIndex" and put "prevItem" instead
        coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

        return coppiedStateArray;
      });
    }
  }

  return (
    <div className="bg-lite">
      <div className="bg-white rounded-3xl flex items-center justify-between py-8 px-10">
        <div className="flex items-center gap-x-5 md:w-auto">
          <HeaderSearch></HeaderSearch>

          <div className="flex items-center gap-x-2">
            <h2 className="font-semibold text-text5">Assigness</h2>
            <Avatar.Group
              maxCount={2}
              maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
            >
              <Avatar style={{ backgroundColor: "#f56a00" }}>Khôi</Avatar>
              <Tooltip className="mx-1" title="Ant User" placement="top">
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Tooltip className="mx-1" title="Ant User" placement="top">
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Tooltip className="mx-1" title="Ant User" placement="top">
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
            </Avatar.Group>
          </div>
        </div>

        <Button
          type="button"
          href="/add-project"
          kind="secondary"
          className="bg-secondary bg-opacity-20 text-secondary"
        >
          Create task
        </Button>
      </div>
      <div className="bg-lite flex-1 overflow-auto  ">
        <main className="p-3 h-full flex items-start gap-x-5">
          {/* TODO */}
          {statuses.map((si, i) => {
            return (
              <TaskBox key={i} name={si.statusName} id={si.statusId}>
                {items
                  .filter((ti) => ti.statusName === si.statusName)
                  .map((item, inx) => (
                    <TaskCard
                      key={item.id}
                      index={inx}
                      status={item}
                      changeStatusName={changeStatusName}
                      moveItem={moveItem}
                    />
                  ))}
              </TaskBox>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default ProjectDetail;
