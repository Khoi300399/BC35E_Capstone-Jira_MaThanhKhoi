import { Link } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";
import useGetElementCoords from "../../hooks/useGetElementCoords";
import AvatarModal from "../Modal/AvatarModal";
import { getStoreJson, USER_LOGIN } from "../../util/setting";
import { UserLoginType } from "../../types/global";
import { useDispatch } from "react-redux";
import { setIsMenu } from "../../redux/statusReducer/statusReducer";

const Header = () => {
  // Admin
  const admin: UserLoginType = getStoreJson(USER_LOGIN);

  // variable ClickOutSide
  const {
    show: isShowDropdown,
    setShow: setIsShowDropdown,
    nodeRef,
  } = useClickOutside();

  // variable Get Coords
  const { coords, handleGetElementCoords, elmRef } = useGetElementCoords();

  const handleToggleSettings = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsShowDropdown((s) => !s);
    handleGetElementCoords(e);
  };

  const dispatch = useDispatch();
  return (
    <div
      id="header "
      className="flex items-center justify-between mb-5 border-b border-gray-100 dark:border-darkSecondary pb-2 md:px-0 px-5 md:py-0 py-3"
    >
      <div className=" max-w-[300px] w-full">
        <Link
          to="/"
          className="flex items-center justify-center-5 gap-x-5 text-2xl text-primary font-bold "
        >
          <img
            srcSet="./img/logo.png 2x"
            alt="..."
            className="w-full md:max-w-[70px] max-w-[40px]"
          />
          <span className="hidden lg:inline-block">Monkey Jira</span>
        </Link>
      </div>
      <div className="flex items-center flex-1 gap-x-4 justify-end">
        <div className="relative" ref={nodeRef}>
          <div
            ref={elmRef}
            className="w-10 h-10 select-none cursor-pointer "
            onClick={handleToggleSettings}
          >
            <img
              src={admin?.avatar || ""}
              alt="avatar"
              className="rounded-full object-cover w-full h-full"
            />
          </div>

          {isShowDropdown && <AvatarModal coords={coords} />}
        </div>

        <div
          className="text-primary text-2xl md:hidden block"
          onClick={() => {
            dispatch(setIsMenu(true));
          }}
        >
          <i className="fa-solid fa-bars-staggered"></i>
        </div>

        <div className="md:flex items-center hidden">
          <p className="text-text5 dark:text-text4 font-semibold">
            {admin?.name || ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
