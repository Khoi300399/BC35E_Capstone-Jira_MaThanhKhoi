import React from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { Coords } from "../../types/global";
import { ACCESS_TOKEN, clearStore, USER_LOGIN } from "../../util/setting";

const AvatarModal = ({ coords }: { coords: Coords }) => {
  const navigate = useNavigate();
  function logOut() {
    clearStore(USER_LOGIN);
    clearStore(ACCESS_TOKEN);
    navigate("/login");
    window.location.reload();
  }
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      style={{
        left: coords.x + coords.width * 1.5,
        top: coords.y + coords.height * 1.5,
      }}
      className="absolute bg-white rounded-2xl shadow-[0px_14px_64px_rgba(0,_0,_0,_0.1)] z-10 w-[230px] px-5 -translate-x-full"
    >
      <div className="absolute  bg-white right-8 rounded-sm -translate-y-2/4 shadow-[0px_14px_64px_rgba(0,_0,_0,_0.1)] rotate-45 w-4 h-4 border-t-transparent border-r-transparent"></div>
      <div className=" pt-5 pb-5  gap-y-2 border-b  border-b-gray-300">
        <Link
          to="/profile"
          className="font-medium  text-text5 inline-block hover:text-blue-500"
        >
          Account
        </Link>
      </div>
      <div className="flex flex-col pt-5 pb-6  gap-y-5">
        <button
          onClick={() => {
            logOut();
          }}
          className="inline-flex gap-x-2 items-center hover:bg-error hover:bg-opacity-20  rounded transition-all hover:text-error text-text5"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.36751 13.4811L6.72685 12.8274L10.4027 12.8274C10.6151 12.8274 10.8188 12.7402 10.9689 12.5851C11.1191 12.4299 11.2035 12.2194 11.2035 12C11.2035 11.7806 11.1191 11.5701 10.9689 11.4149C10.8188 11.2598 10.6151 11.1726 10.4027 11.1726L6.72685 11.1726L7.36751 10.5189C7.44257 10.442 7.50215 10.3505 7.54281 10.2497C7.58346 10.1488 7.6044 10.0407 7.6044 9.93144C7.6044 9.82221 7.58346 9.71406 7.54281 9.61324C7.50215 9.51241 7.44257 9.42089 7.36751 9.34397C7.29306 9.26642 7.20449 9.20486 7.1069 9.16286C7.00931 9.12085 6.90464 9.09922 6.79892 9.09922C6.6932 9.09922 6.58853 9.12085 6.49094 9.16286C6.39335 9.20486 6.30478 9.26642 6.23033 9.34397L4.22825 11.4125C4.15534 11.4912 4.09819 11.584 4.06007 11.6856C3.97998 11.887 3.97998 12.113 4.06007 12.3144C4.09819 12.416 4.15534 12.5088 4.22825 12.5875L6.23033 14.656C6.38113 14.8118 6.58566 14.8994 6.79892 14.8994C7.01218 14.8994 7.21671 14.8118 7.36751 14.656C7.51831 14.5002 7.60303 14.2889 7.60303 14.0686C7.60303 13.8482 7.51831 13.6369 7.36751 13.4811ZM8.44864 7.03546C8.37292 7.1137 8.31285 7.20658 8.27187 7.30879C8.23089 7.41101 8.2098 7.52057 8.2098 7.63121C8.2098 7.74185 8.23089 7.8514 8.27187 7.95362C8.31285 8.05584 8.37292 8.14872 8.44864 8.22695C8.52436 8.30519 8.61425 8.36724 8.71318 8.40958C8.81211 8.45192 8.91815 8.47372 9.02523 8.47372C9.13232 8.47372 9.23836 8.45192 9.33729 8.40958C9.43622 8.36724 9.52611 8.30519 9.60183 8.22695C10.3241 7.48038 11.2445 6.9719 12.2466 6.76581C13.2486 6.55973 14.2873 6.6653 15.2312 7.06918C16.1752 7.47306 16.982 8.1571 17.5497 9.03479C18.1174 9.91247 18.4203 10.9444 18.4203 12C18.4203 13.0556 18.1174 14.0875 17.5497 14.9652C16.982 15.8429 16.1752 16.5269 15.2312 16.9308C14.2873 17.3347 13.2486 17.4403 12.2466 17.2342C11.2445 17.0281 10.3241 16.5196 9.60183 15.773C9.52611 15.6948 9.43622 15.6328 9.33729 15.5904C9.23836 15.5481 9.13232 15.5263 9.02524 15.5263C8.91815 15.5263 8.81212 15.5481 8.71318 15.5904C8.61425 15.6328 8.52436 15.6948 8.44864 15.773C8.37292 15.8513 8.31285 15.9442 8.27187 16.0464C8.23089 16.1486 8.2098 16.2582 8.2098 16.3688C8.2098 16.4794 8.23089 16.589 8.27187 16.6912C8.31285 16.7934 8.37292 16.8863 8.44864 16.9645C9.39775 17.9393 10.605 18.6018 11.9181 18.8685C13.2312 19.1352 14.5914 18.9942 15.827 18.4631C17.0626 17.9321 18.1184 17.0349 18.861 15.8846C19.6037 14.7344 20 13.3827 20 12C20 10.6173 19.6037 9.2656 18.861 8.11536C18.1184 6.96513 17.0626 6.0679 15.827 5.53686C14.5914 5.00582 13.2312 4.86476 11.9181 5.13146C10.605 5.39816 9.39775 6.06069 8.44864 7.03546Z"
              fill="currentColor"
            />
          </svg>

          <span> Sign out</span>
        </button>
        <div className=" text-text5 inline-block ">Interface</div>
      </div>
    </div>,
    document.querySelector("body") as HTMLElement
  );
};

export default AvatarModal;
