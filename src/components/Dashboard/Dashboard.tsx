import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../index";
import {
  ACCESS_TOKEN,
  clearStore,
  getStoreJson,
  USER_LOGIN,
} from "../../util/setting";
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

type Theme = "light" | "dark";
// Dark mode
const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }
  return "light";
};

const setTheme = (theme: Theme) => {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("class", theme);
};

//
if (!getStoreJson(USER_LOGIN)) {
  history.push("/login");
}
function logOut() {
  clearStore(USER_LOGIN);
  clearStore(ACCESS_TOKEN);
  window.location.reload();
}

const navLink =
  "flex gap-y-8 items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg";
const Dashboard = (props: Props) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme());

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      setTheme(newTheme);
      return newTheme;
    });
  };

  const sideBarLink: linkType[] = [
    {
      icon: <IconDashboard />,
      title: "Project management",
      url: "/",
    },
    {
      icon: <IconUsers />,
      title: "User management",
      url: "/user",
    },
    {
      icon: <IconTask />,
      title: "Create project",
      url: "/add-project",
    },
    {
      icon: <IconLogout />,
      title: "Log out",
      url: "*",
      onClick: () => {
        logOut();
      },
    },
    {
      icon: <IconDarkMode />,
      title: "Light/Dark",
      url: "#",
      onClick: () => {
        toggleTheme();
      },
    },
  ];
  return (
    <div className=" w-full md:w-[76px] rounded-3xl shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] flex flex-col items-center px-4 py-4 flex-shrink-0 ">
      {sideBarLink.map(({ icon, title, url, onClick }: linkType) => (
        <div
          className="md:tooltip md:rounded-lg md:tooltip-primary md:tooltip-right md:mb-6 last:mt-auto last:shadow-sdprimary"
          data-tip={title}
          key={title}
        >
          <NavLink
            to={url}
            onClick={onClick}
            className={({ isActive }: any) =>
              isActive
                ? `${navLink} text-primary dark:bg-darkStoke dark:text-primary last:bg-strock bg-opacity-20 md:rounded-lg `
                : `${navLink} text-iconColor`
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
