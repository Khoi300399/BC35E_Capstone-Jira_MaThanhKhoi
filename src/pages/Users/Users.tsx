import React from "react";
import IconDelete from "../../components/icons/IconDelete";
import IconEdit from "../../components/icons/IconEdit";
import { Link } from "react-router-dom";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";

type Props = {};

const Users = (props: Props) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="mb-2 bg-white rounded-3xl flex items-center justify-between py-8 px-10">
        <div className="w-2/12 hover:w-2/6 focus-within:w-2/6  transition-all ease-out">
          <HeaderSearch></HeaderSearch>
        </div>
        <div className="flex items-start gap-x-6">
          <Link
            to="/add-project"
            className="flex items-center justify-center rounded-full w-14 h-14 text-white bg-secondary bg-opacity-60 hover:bg-[#352A65] hover:-translate-y-1 transition-all ease-linear "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </Link>
          <div className="flex-1">
            <h1 className="text-text1 font-semibold text-[22px] mb-2">
              Create Your Project
            </h1>
            <p className="text-text3 text-sm mb-2">
              Jump right into our editor and create your first project!
            </p>
            <Link to="#" className="text-sm text-primary ">
              Need any help? Learn More...
            </Link>
          </div>
        </div>
      </div>
      <table className="table-user">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>ID</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mã Thành Khôi</td>
            <td> 7968</td>
            <td>khoimtk321@gmail.com</td>
            <td>0399999999</td>
            <td>
              <div className="flex items-center text-gray-500 gap-x-3">
                <IconEdit></IconEdit>
                <IconDelete></IconDelete>
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mã Thành Khôi</td>
            <td> 7968</td>
            <td>khoimtk321@gmail.com</td>
            <td>0399999999</td>
            <td>
              <div className="flex items-center text-gray-500 gap-x-3">
                <IconEdit></IconEdit>
                <IconDelete></IconDelete>
              </div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mã Thành Khôi</td>
            <td> 7968</td>
            <td>khoimtk321@gmail.com</td>
            <td>0399999999</td>
            <td>
              <div className="flex items-center text-gray-500 gap-x-3">
                <IconEdit></IconEdit>
                <IconDelete></IconDelete>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
