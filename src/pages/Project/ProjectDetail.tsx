import React from "react";
import { Avatar, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

type Props = {};

const ProjectDetail = (props: Props) => {
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
              <Avatar src="https://joeschmoe.io/api/v1/random" />
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
      <div className="bg-lite flex-1 overflow-auto">
        <main className="p-3 h-full inline-flex space-x-2">
          {/* TODO */}
          <div className="flex flex-col  w-80 rounded-lg bg-[rgba(9,30,66,0.04)]">
            <div className="bg-blue-200 rounded px-3 py-1 flex items-center">
              <span className="text-lg px-3 pt-3 pb-1 font-semibold text-blue-500 leading-tight font-mono">
                TODO
              </span>
            </div>
            <div className="flex-1 min-h-0">
              <ul className="pt-1 pb-3 px-3">
                <li className="mt-1 bg-white p-5 shadow rounded-md ">
                  <Link className="flex flex-col gap-y-5 " to="#">
                    <div className="flex items-center gap-x-2">
                      <div>
                        <span className="text-base font-medium text-text5">
                          Bài tập cuối khóa
                        </span>
                      </div>
                      <div>
                        <span className="px-2 py-1 text-xs text-red-500 bg-red-200 font-medium rounded-lg">
                          BUG
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="bg-[#198754] w-auto text-white text-xs font-semibold rounded-sm  px-2 py-1">
                          Low
                        </span>
                      </div>
                      <Avatar.Group
                        maxCount={2}
                        maxStyle={{
                          color: "#f56a00",
                          backgroundColor: "#fde3cf",
                        }}
                      >
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                        <Avatar style={{ backgroundColor: "#f56a00" }}>
                          Khôi
                        </Avatar>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                      </Avatar.Group>
                    </div>
                  </Link>
                </li>
                <li className="mt-1 bg-white p-5 shadow rounded-md ">
                  <Link className="flex flex-col gap-y-5" to="#">
                    <div className="flex items-center gap-x-2">
                      <div>
                        <span className="text-base font-medium text-text5">
                          Bài tập cuối khóa
                        </span>
                      </div>
                      <div>
                        <span className="px-2 py-1 text-xs text-red-500 bg-red-200 font-medium rounded-lg">
                          BUG
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="bg-[#ffc107] w-auto text-white text-xs font-semibold rounded-sm  px-2 py-1">
                          MEDIUM
                        </span>
                      </div>
                      <Avatar.Group
                        maxCount={2}
                        maxStyle={{
                          color: "#f56a00",
                          backgroundColor: "#fde3cf",
                        }}
                      >
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                        <Avatar style={{ backgroundColor: "#f56a00" }}>
                          Khôi
                        </Avatar>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                      </Avatar.Group>
                    </div>
                  </Link>
                </li>
                <li className="mt-1 bg-white p-5 shadow rounded-md ">
                  <Link className="flex flex-col gap-y-5" to="#">
                    <div className="flex items-center gap-x-2">
                      <div>
                        <span className="text-base font-medium text-text5">
                          Bài tập cuối khóa
                        </span>
                      </div>
                      <div>
                        <span className="px-2 py-1 text-xs text-teal-500 bg-teal-200 font-medium rounded-lg">
                          TASK
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="bg-[#dc3545] w-auto text-white text-xs font-semibold rounded-sm  px-2 py-1">
                          HIGH
                        </span>
                      </div>
                      <Avatar.Group
                        maxCount={2}
                        maxStyle={{
                          color: "#f56a00",
                          backgroundColor: "#fde3cf",
                        }}
                      >
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                        <Avatar style={{ backgroundColor: "#f56a00" }}>
                          Khôi
                        </Avatar>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                      </Avatar.Group>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* In Progress */}
          <div className="flex flex-col  w-80 rounded-lg bg-[rgba(9,30,66,0.04)]">
            <div className="bg-orange-200 rounded px-3 py-1 flex items-center">
              <span className="text-lg px-3 pt-3 pb-1 font-semibold text-orange-500 leading-tight font-mono">
                TODO
              </span>
            </div>
            <div className="flex-1 min-h-0">
              <ul className="pt-1 pb-3 px-3">
                <li className="mt-1 bg-white p-5 shadow rounded-md ">
                  <Link className="flex flex-col gap-y-5 " to="#">
                    <div>
                      <span className="text-base font-medium text-text5">
                        Bài tập cuối khóa
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="bg-[#198754] w-auto text-white text-xs font-semibold rounded-sm  px-2 py-1">
                          Low
                        </span>
                      </div>
                      <Avatar.Group
                        maxCount={2}
                        maxStyle={{
                          color: "#f56a00",
                          backgroundColor: "#fde3cf",
                        }}
                      >
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                        <Avatar style={{ backgroundColor: "#f56a00" }}>
                          Khôi
                        </Avatar>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                      </Avatar.Group>
                    </div>
                  </Link>
                </li>
                <li className="mt-1 bg-white p-5 shadow rounded-md ">
                  <Link className="flex flex-col gap-y-5" to="#">
                    <div>
                      <span className="text-base font-medium text-text5">
                        Bài tập cuối khóa
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="bg-[#ffc107] w-auto text-white text-xs font-semibold rounded-sm  px-2 py-1">
                          MEDIUM
                        </span>
                      </div>
                      <Avatar.Group
                        maxCount={2}
                        maxStyle={{
                          color: "#f56a00",
                          backgroundColor: "#fde3cf",
                        }}
                      >
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                        <Avatar style={{ backgroundColor: "#f56a00" }}>
                          Khôi
                        </Avatar>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                      </Avatar.Group>
                    </div>
                  </Link>
                </li>
                <li className="mt-1 bg-white p-5 shadow rounded-md ">
                  <Link className="flex flex-col gap-y-5" to="#">
                    <div>
                      <span className="text-base font-medium text-text5">
                        Bài tập cuối khóa
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="bg-[#dc3545] w-auto text-white text-xs font-semibold rounded-sm  px-2 py-1">
                          HIGH
                        </span>
                      </div>
                      <Avatar.Group
                        maxCount={2}
                        maxStyle={{
                          color: "#f56a00",
                          backgroundColor: "#fde3cf",
                        }}
                      >
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                        <Avatar style={{ backgroundColor: "#f56a00" }}>
                          Khôi
                        </Avatar>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                      </Avatar.Group>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col  w-80 rounded-lg bg-[rgba(9,30,66,0.04)]">
            <div className="bg-pink-200 rounded px-3 py-1 flex items-center">
              <span className="text-lg px-3 pt-3 pb-1 font-semibold text-pink-500 leading-tight font-mono">
                TODO
              </span>
            </div>
            <div className="flex-1 min-h-0">
              <ul className="pt-1 pb-3 px-3">
                <li className="mt-1 bg-white p-5 shadow rounded-md ">
                  <Link className="flex flex-col gap-y-5 " to="#">
                    <div>
                      <span className="text-base font-medium text-text5">
                        Bài tập cuối khóa
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="bg-[#198754] w-auto text-white text-xs font-semibold rounded-sm  px-2 py-1">
                          Low
                        </span>
                      </div>
                      <Avatar.Group
                        maxCount={2}
                        maxStyle={{
                          color: "#f56a00",
                          backgroundColor: "#fde3cf",
                        }}
                      >
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                        <Avatar style={{ backgroundColor: "#f56a00" }}>
                          Khôi
                        </Avatar>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                      </Avatar.Group>
                    </div>
                  </Link>
                </li>
                <li className="mt-1 bg-white p-5 shadow rounded-md ">
                  <Link className="flex flex-col gap-y-5" to="#">
                    <div>
                      <span className="text-base font-medium text-text5">
                        Bài tập cuối khóa
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="bg-[#ffc107] w-auto text-white text-xs font-semibold rounded-sm  px-2 py-1">
                          MEDIUM
                        </span>
                      </div>
                      <Avatar.Group
                        maxCount={2}
                        maxStyle={{
                          color: "#f56a00",
                          backgroundColor: "#fde3cf",
                        }}
                      >
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                        <Avatar style={{ backgroundColor: "#f56a00" }}>
                          Khôi
                        </Avatar>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                      </Avatar.Group>
                    </div>
                  </Link>
                </li>
                <li className="mt-1 bg-white p-5 shadow rounded-md ">
                  <Link className="flex flex-col gap-y-5" to="#">
                    <div>
                      <span className="text-base font-medium text-text5">
                        Bài tập cuối khóa
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="bg-[#dc3545] w-auto text-white text-xs font-semibold rounded-sm  px-2 py-1">
                          HIGH
                        </span>
                      </div>
                      <Avatar.Group
                        maxCount={2}
                        maxStyle={{
                          color: "#f56a00",
                          backgroundColor: "#fde3cf",
                        }}
                      >
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                        <Avatar style={{ backgroundColor: "#f56a00" }}>
                          Khôi
                        </Avatar>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                      </Avatar.Group>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col  w-80 rounded-lg bg-[rgba(9,30,66,0.04)]">
            <div className="bg-green-200 rounded px-3 py-1 flex items-center">
              <span className="text-lg px-3 pt-3 pb-1 font-semibold text-green-500 leading-tight font-mono">
                TODO
              </span>
            </div>
            <div className="flex-1 min-h-0">
              <ul className="pt-1 pb-3 px-3">
                <li className="mt-1 bg-white p-5 shadow rounded-md ">
                  <Link className="flex flex-col gap-y-5 " to="#">
                    <div>
                      <span className="text-base font-medium text-text5">
                        Bài tập cuối khóa
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="bg-[#198754] w-auto text-white text-xs font-semibold rounded-sm  px-2 py-1">
                          Low
                        </span>
                      </div>
                      <Avatar.Group
                        maxCount={2}
                        maxStyle={{
                          color: "#f56a00",
                          backgroundColor: "#fde3cf",
                        }}
                      >
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                        <Avatar style={{ backgroundColor: "#f56a00" }}>
                          Khôi
                        </Avatar>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                      </Avatar.Group>
                    </div>
                  </Link>
                </li>
                <li className="mt-1 bg-white p-5 shadow rounded-md ">
                  <Link className="flex flex-col gap-y-5" to="#">
                    <div>
                      <span className="text-base font-medium text-text5">
                        Bài tập cuối khóa
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="bg-[#ffc107] w-auto text-white text-xs font-semibold rounded-sm  px-2 py-1">
                          MEDIUM
                        </span>
                      </div>
                      <Avatar.Group
                        maxCount={2}
                        maxStyle={{
                          color: "#f56a00",
                          backgroundColor: "#fde3cf",
                        }}
                      >
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                        <Avatar style={{ backgroundColor: "#f56a00" }}>
                          Khôi
                        </Avatar>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                      </Avatar.Group>
                    </div>
                  </Link>
                </li>
                <li className="mt-1 bg-white p-5 shadow rounded-md ">
                  <Link className="flex flex-col gap-y-5" to="#">
                    <div>
                      <span className="text-base font-medium text-text5">
                        Bài tập cuối khóa
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="bg-[#dc3545] w-auto text-white text-xs font-semibold rounded-sm  px-2 py-1">
                          HIGH
                        </span>
                      </div>
                      <Avatar.Group
                        maxCount={2}
                        maxStyle={{
                          color: "#f56a00",
                          backgroundColor: "#fde3cf",
                        }}
                      >
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                        <Avatar style={{ backgroundColor: "#f56a00" }}>
                          Khôi
                        </Avatar>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                        <Tooltip
                          className="mx-1"
                          title="Ant User"
                          placement="top"
                        >
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                          />
                        </Tooltip>
                      </Avatar.Group>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectDetail;
