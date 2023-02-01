import React from "react";
import Heading from "../../components/Heading/Heading";
import IconDelete from "../../components/icons/IconDelete";
import IconEdit from "../../components/icons/IconEdit";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
type Props = {};

const Project = (props: Props) => {
  return (
    <div className="w-full overflow-x-auto">
      <Heading>Project</Heading>
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
                <Avatar
                  className="mx-1"
                  style={{ backgroundColor: "#1890ff" }}
                  icon={<AntDesignOutlined />}
                />
                <Avatar
                  style={{ backgroundColor: "#1890ff" }}
                  icon={<AntDesignOutlined />}
                />
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
