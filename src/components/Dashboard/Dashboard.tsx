import React from "react";
import { NavLink } from "react-router-dom";
import IconDarkMode from "../icons/IconDarkMode";
import IconDashboard from "../icons/IconDashboard";
import IconLogout from "../icons/IconLogout";
import IconTask from "../icons/IconTask";
import IconUsers from "../icons/IconUser";

type Props = {};
type linkType = {
  icon: JSX.Element;
  title: string;
  url: string;
  onClick?: any;
};
const sideBarLink: linkType[] = [
  {
    icon: <IconDashboard />,
    title: "Project",
    url: "/",
  },
  {
    icon: <IconUsers />,
    title: "Users",
    url: "/user",
  },
  {
    icon: <IconTask />,
    title: "Task",
    url: "/task",
  },
  {
    icon: <IconLogout />,
    title: "Log out",
    url: "/add-project",
    onClick: () => {},
  },
  {
    icon: <IconDarkMode />,
    title: "Light/Dark",
    url: "/comment",
    onClick: () => {},
  },
];
const navLink =
  "flex gap-y-8 items-center gap-x-5  md:w-12 md:h-12 md:justify-center md:rounded-lg    ";
const Dashboard = (props: Props) => {
  return (
    <div className=" w-full md:w-[76px] rounded-3x shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] flex flex-col items-center px-4 py-4 flex-shrink-0 ">
      {sideBarLink.map(({ icon, title, url }: linkType) => (
        <div
          className="md:tooltip md:tooltip-primary  md:tooltip-right md:mb-6 last:mt-auto last:shadow-sdprimary"
          data-tip={title}
          key={title}
        >
          <NavLink
            to={url}
            className={({ isActive }: any) =>
              isActive
                ? `${navLink}text-primary bg-primary bg-opacity-20 `
                : `${navLink}text-iconColor`
            }
          >
            <span>{icon}</span>
            <span className="md:hidden">{title}</span>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
