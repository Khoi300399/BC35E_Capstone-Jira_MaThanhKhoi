import { useEffect, useState } from "react";
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
import { RootState } from "../../redux/config";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { setIsMenu } from "../../redux/statusReducer/statusReducer";

type Props = {};
type linkType = {
  icon: JSX.Element;
  title: string;
  url: string;
  onClick?: any;
};

// Dark mode
type Theme = "light" | "dark";
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
const navLink = "flex items-center gap-x-5  justify-start rounded-lg p-3";
const Dashboard = (props: Props) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme());
  const dispatch = useDispatch();

  const { isMenu } = useSelector((state: RootState) => state.statusReducer);
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
    <>
      <div className="w-[76px] rounded-3xl shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] md:flex flex-col items-center px-4 py-4 flex-shrink-0 hidden ">
        {sideBarLink.map(({ icon, title, url, onClick }: linkType) => (
          <div
            className="tooltip rounded-lg tooltip-primary tooltip-right mb-6 last:mt-auto last:shadow-sdprimary"
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
            </NavLink>
          </div>
        ))}
      </div>
      <div
        className={`fixed z-[9999] top-0 right-0 bottom-0 w-[300px] bg-white dark:bg-darkbg px-5 py-10 shadow-lg transition-all ease-linear duration-300 ${
          isMenu ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <div
          onClick={() => {
            dispatch(setIsMenu(false));
          }}
          className="flex items-center justify-center p-5 bg-error text-white shadow-lg mb-5"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        {sideBarLink.map(({ icon, title, url, onClick }: linkType) => (
          <div className="flex flex-col" key={title}>
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
    </>
  );
};

export default Dashboard;
