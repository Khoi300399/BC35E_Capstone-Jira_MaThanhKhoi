import React from "react";
import IconDelete from "../../components/icons/IconDelete";
import IconEdit from "../../components/icons/IconEdit";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import Button from "../../components/Button/Button";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
type Props = {};

const Project = (props: Props) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className=" bg-white rounded-3xl flex items-center justify-between py-8 px-10">
        <div className="w-2/12 hover:w-2/6 focus-within:w-2/6  transition-all ease-out">
          <HeaderSearch></HeaderSearch>
        </div>
        <Button
          type="button"
          href="/add-project"
          kind="secondary"
          className="bg-secondary bg-opacity-20 text-secondary"
        >
          Create project
        </Button>
      </div>
      <table className="table-project">
        <thead>
          <tr>
            <th>Id</th>
            <th>Project name</th>
            <th>Category name</th>
            <th>Creator</th>
            <th>Members</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7968</td>
            <td>
              <div className="truncate">
                Cybersoft WordPress Cybersoft WordPress Cybersoft WordPress
              </div>
            </td>
            <td> Dự án web</td>
            <td>admin</td>
            <td>
              <Avatar.Group
                maxCount={2}
                maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
              >
                <Avatar src="https://joeschmoe.io/api/v1/random" />
                <Avatar style={{ backgroundColor: "#f56a00" }}>Khôi</Avatar>
                <Tooltip title="Ant User" placement="top">
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
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                </Tooltip>
              </Avatar.Group>
            </td>
            <td>
              <div className="flex items-center text-gray-500 gap-x-3">
                <IconEdit></IconEdit>
                <IconDelete></IconDelete>
              </div>
            </td>
          </tr>
          <tr>
            <td>7968</td>
            <td>Cybersoft WordPress</td>
            <td> Dự án web</td>
            <td>admin</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>7968</td>
            <td>Cybersoft WordPress</td>
            <td> Dự án web</td>
            <td>admin</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Project;
