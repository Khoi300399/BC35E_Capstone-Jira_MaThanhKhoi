import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { DispathType, RootState } from "../../redux/config";
import IconDelete from "../../components/icons/IconDelete";
import IconEdit from "../../components/icons/IconEdit";
import { Avatar, Pagination, Tooltip } from "antd";
import Button from "../../components/Button/Button";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import ModalBase from "../../components/Modal/ModalBase";
import FormGroup from "../../components/common/FormGroup/FormGroup";
import TextTiny from "../../components/Input/TextTiny";
import Option from "../../components/Dropdown/Option";
import List from "../../components/Dropdown/List";
import Dropdown from "../../components/Dropdown/Dropdow";
import Label from "../../components/Label/Label";
import Select from "../../components/Dropdown/Select";
import FormRow from "../../components/common/FormRow/FormRow";
import Input from "../../components/Input/Input";
import useClickOutside from "../../hooks/useClickOutside";
import { useToast } from "../../components/Toast";
import { useDispatch, useSelector } from "react-redux";
import {
  assignUserProject,
  deleteProject,
  getProjectApi,
  getProjectCategoryApi,
  getProjectDetailByIdApi,
  removeUserFromProject,
  updateProject,
} from "../../redux/projectReducer/projectReducer";
import { getUserApi } from "../../redux/userReducer/userReducer";

import IconError from "../../components/icons/IconError";
import { getStoreJson, USER_LOGIN } from "../../util/setting";
import { Link } from "react-router-dom";
import { UserLoginType } from "../../types/global";
type Props = {};

const Project = (props: Props) => {
  // lấy data từ redux
  const { projectAll, projectCategory, loading, projectDetail } = useSelector(
    (state: RootState) => state.projectReducer
  );
  const { id: projectId } = projectDetail;
  const { userAll } = useSelector((state: RootState) => state.userReducer);

  const dispatch: DispathType = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { show, setShow, nodeRef } = useClickOutside();
  const handleToggleDropdown = () => {
    setShow(!show);
  };

  const [search, setSearch] = useState<string>("");
  const [saveId, setSaveId] = useState<number>(0);

  const [searchUser, setSearchUser] = useState<string>("");

  const [openDesc, setOpenDesc] = useState<boolean>(false);
  const [openModalBase, setOpenModalBase] = useState<boolean>(false);
  const [openModalMember, setOpenModalMember] = useState<boolean>(false);
  const [openModalDeleteProject, setOpenModalDeleteProject] =
    useState<boolean>(false);

  const handleToggleModal = async (id: number) => {
    setSaveId(id);
    setOpenDesc(false);
    setIsLoading(true);
    setOpenModalBase(true);
    await dispatch(getProjectCategoryApi());
    dispatch(getProjectDetailByIdApi(id));

    setIsLoading(false);
  };

  const handleToggleModalMember = async (id: number) => {
    setSaveId(id);
    setIsLoading(true);
    setOpenModalMember(true);
    await dispatch(getUserApi());
    await dispatch(getProjectDetailByIdApi(id));

    setIsLoading(false);
  };

  const handleToggleModalDeteleProject = async (id: number) => {
    setSaveId(id);
    setIsLoading(true);
    setOpenModalDeleteProject(true);
    dispatch(getProjectDetailByIdApi(id));

    setIsLoading(false);
  };

  const filteredUsers = userAll.filter((user) => {
    const lowerCaseSearchText = searchUser.toLowerCase();
    return user.name.toLowerCase().includes(lowerCaseSearchText);
  });

  const filterProject = projectAll.filter((prod) => {
    const lowerCaseSearchText = search.toLowerCase();
    return prod.projectName.toLowerCase().includes(lowerCaseSearchText);
  });

  // Admin
  const admin: UserLoginType = getStoreJson(USER_LOGIN);

  useEffect(() => {
    dispatch(getProjectApi());
  }, [dispatch]);

  const { add } = useToast();
  // phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handlePageSizeChange = (current: number, size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  const totalItems = filterProject.length;

  const startItemIndex = (currentPage - 1) * pageSize;
  const endItemIndex = startItemIndex + pageSize;
  const pageProject = filterProject.slice(startItemIndex, endItemIndex);
  return (
    <>
      {/* Modal delete project */}
      {openModalDeleteProject && (
        <ModalBase
          visible={openModalDeleteProject}
          onClose={() => {
            setOpenModalDeleteProject(false);
          }}
        >
          {isLoading ? (
            <div className="w-8 h-8 rounded-full border-4 border-blue-300 border-t-transparent animate-spin"></div>
          ) : (
            <>
              <div className="relative bg-white dark:bg-darkSecondary md:max-w-[500px] md:w-[400px] md:max-h-[350px] w-[300px] h-auto   overflow-hidden rounded-lg shadow-sdSecondary">
                <div className="flex gap-x-2 p-6">
                  <IconError />
                  <div className="flex-1">
                    <h3 className="text-xl font-mono font-semibold dark:text-text4">
                      Delete {projectDetail.projectName}?
                    </h3>
                  </div>
                </div>
                <div className="text-sm text-text2 dark:text-text3  leading-6 px-6">
                  <p className="mb-3">
                    You're about to permanently delete this project, its
                    comments and attachments, and all of its data.
                  </p>
                  <p>
                    If you're not sure, you can resolve or close this issue
                    instead.
                  </p>
                </div>
                <div className="flex items-start justify-end gap-x-3 px-6 py-5">
                  <Button
                    kind="cancel"
                    type="button"
                    onClick={() => {
                      setOpenModalDeleteProject(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    kind="delete"
                    type="button"
                    onClick={async () => {
                      setIsLoading(true);
                      await dispatch(deleteProject(projectDetail.id));
                      await dispatch(getProjectApi());
                      await setIsLoading(false);
                      await setOpenModalDeleteProject(false);

                      add({
                        type: "success",
                        message: `Delete ${projectDetail.projectName} successfully`,
                        duration: 3000,
                        position: "topRight",
                      });
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </>
          )}
        </ModalBase>
      )}

      {/* Modal add member */}
      {openModalMember && (
        <ModalBase
          visible={openModalMember}
          onClose={() => {
            setOpenModalMember(false);
          }}
        >
          {isLoading ? (
            <div className="w-8 h-8 rounded-full border-4 border-blue-300 border-t-transparent animate-spin"></div>
          ) : (
            <div className="relative bg-white dark:bg-darkbg md:max-w-[750px] md:w-[750px] md:max-h-[650px] md:h-[650px] w-[375px] h-[812px]   overflow-hidden rounded-lg shadow-sdSecondary">
              <div>
                <div className="flex items-start justify-between mx-5 mt-5">
                  <div className=" flex items-center gap-x-3">
                    <div className="text-text2 font-medium">ID :</div>
                    <span className="flex items-center justify-center p-2 min-w-[45px] h-[45px] rounded-lg shadow-sdThirty text-text2 font-semibold select-none">
                      {projectDetail.id}
                    </span>
                  </div>
                  <span
                    className="text-text2 hover:text-error select-none cursor-pointer"
                    onClick={() => {
                      setOpenModalMember(false);
                    }}
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </div>
                <h2 className="mt-5 text-2xl text-center text-text5 dark:text-text4 font-bold ">
                  {projectDetail.projectName}
                </h2>
                <div className="flex items-start justify-between">
                  <div className="w-[55%] p-4 ">
                    <h3 className="text-text5 dark:text-text3 text-2xl font-mono font-semibold py-2 text-center">
                      Add member
                    </h3>

                    <div className="mt-3">
                      <input
                        className="p-4 outline-none w-full border border-gray-200 dark:border-darkStoke  dark:placeholder:text-text2 dark:bg-darkSecondary dark:text-white rounded"
                        type="text"
                        placeholder="Search user..."
                        onChange={(e: React.FormEvent<HTMLInputElement>) => {
                          setSearchUser(e.currentTarget.value);
                        }}
                      />
                    </div>

                    <div className="overflow-x-hidden overflow-y-auto max-h-[400px] mx-w-[600px] scrollbar-none border border-strock dark:border-darkStoke mt-3 rounded-lg">
                      {filteredUsers.map(({ avatar, name, userId }) => {
                        const inx = projectDetail.members.findIndex(
                          (u) => u.userId === userId
                        );
                        const isActive = inx !== -1;

                        return (
                          <div
                            key={userId}
                            className="flex items-center justify-between p-4 border-b border-strock dark:border-darkStoke"
                          >
                            <div className="flex items-center gap-x-2">
                              <Avatar
                                src={
                                  <img src={avatar} alt={`${name} avatar`} />
                                }
                              />
                              <span className="text-text1 md:text-base text-xs dark:text-text3 max-w-[250px] font-medium truncate">
                                {name}
                              </span>
                            </div>
                            <button
                              disabled={isActive}
                              onClick={async () => {
                                await dispatch(
                                  assignUserProject({
                                    projectId,
                                    userId,
                                  })
                                );
                                await dispatch(getProjectApi());
                                await dispatch(getProjectDetailByIdApi(saveId));

                                add({
                                  type: "success",
                                  message: `Add ${name} successfully`,
                                  duration: 3000,
                                  position: "bottomLeft",
                                });
                              }}
                              className="text-white font-medium font-mono bg-blue-500 md:px-2 md:py-1 p-1 md:text-base text-xs rounded-lg disabled:bg-opacity-20"
                            >
                              Add
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-[45%] p-4">
                    <h3 className="text-text5 dark:text-text3 text-2xl font-mono font-semibold py-2 text-center">
                      Remove member
                    </h3>

                    <div className="overflow-x-hidden overflow-y-auto border border-strock dark:border-darkStoke mt-3 rounded-lg max-h-[470px] scrollbar-none">
                      {projectDetail.members.map(({ avatar, name, userId }) => {
                        return (
                          <div
                            key={userId}
                            className="flex items-center justify-between p-4 border-b border-strock dark:border-darkStoke "
                          >
                            <div className="flex items-center gap-x-2">
                              <Avatar
                                src={
                                  <img src={avatar} alt={`${name} avatar`} />
                                }
                              />
                              <span className="text-text1 dark:text-text3 font-medium">
                                {name}
                              </span>
                            </div>
                            <button
                              onClick={async () => {
                                await dispatch(
                                  removeUserFromProject({
                                    projectId,
                                    userId,
                                  })
                                );
                                await dispatch(getProjectDetailByIdApi(saveId));
                                await dispatch(getProjectApi());
                                await add({
                                  type: "success",
                                  message: `Delete ${name} successfully`,
                                  duration: 3000,
                                  position: "bottomLeft",
                                });
                              }}
                              className="text-white md:px-2 md:py-1 p-1 md:text-base text-xs font-medium font-mono bg-error px-2 py-1 rounded-lg"
                            >
                              Remove
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              );
            </div>
          )}
        </ModalBase>
      )}

      {/* Modal update project */}
      {openModalBase && (
        <ModalBase
          visible={openModalBase}
          onClose={() => {
            setOpenModalBase(false);
          }}
        >
          {isLoading ? (
            <div className="w-8 h-8 rounded-full border-4 border-blue-300 border-t-transparent animate-spin"></div>
          ) : (
            <Formik
              initialValues={{
                projectName: projectDetail.projectName,
                description: projectDetail.description,
                categoryId: projectDetail.id,
              }}
              validationSchema={Yup.object().shape({
                projectName: Yup.string().required(""),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                await dispatch(updateProject(saveId, values));
                await dispatch(getProjectApi());
                setOpenModalBase(false);
              }}
            >
              {({ isSubmitting, setFieldValue, values, resetForm }) => {
                const placeholderCategory =
                  values.categoryId === 1
                    ? "Dự án web"
                    : values.categoryId === 2
                    ? "Dự án phần mềm"
                    : values.categoryId === 3
                    ? "Dự án di động"
                    : projectDetail.projectCategory.name;

                const handleSelectCategory = (id: number) => {
                  setShow(false);
                  setFieldValue("categoryId", id);
                };

                return (
                  <Form>
                    <div className="relative bg-white dark:bg-darkbg md:min-w-[750px] md:max-h-[650px] w-[375px] h-[812px] overflow-x-hidden overflow-y-auto rounded-lg shadow-sdSecondary scrollbar-none">
                      <div className="flex items-start justify-between mx-5 mt-5">
                        <div className=" flex items-center gap-x-3">
                          <div className="text-text2 font-medium">ID :</div>
                          <span className="flex p-2 items-center justify-center min-w-[45px] h-[45px] rounded-lg shadow-sdThirty text-text2 font-semibold select-none">
                            {projectDetail.id}
                          </span>
                        </div>
                        <span
                          className="text-text2 hover:text-error select-none cursor-pointer"
                          onClick={() => {
                            setOpenModalBase(false);
                          }}
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
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="bg-white dark:bg-darkbg rounded-xl py-10 px-[66px]">
                        <div className="text-center">
                          <h1 className="py-4 px-14 bg-text4 dark:text-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block">
                            Update Project 📝
                          </h1>

                          <FormRow>
                            <FormGroup>
                              <Label htmlFor="projectName">Project name</Label>
                              <Input
                                id="projectName"
                                name="projectName"
                                type="text"
                                placeholder={projectDetail.projectName}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label>Project category *</Label>
                              <Dropdown>
                                <Select
                                  nodeRef={nodeRef}
                                  show={show}
                                  placeholder={placeholderCategory}
                                  onClick={handleToggleDropdown}
                                />
                                <List show={show}>
                                  {projectCategory.map(
                                    ({ id, projectCategoryName }) => {
                                      const selected = id === values.categoryId;
                                      return (
                                        <Option
                                          className={
                                            selected
                                              ? "text-[#42526e] bg-[rgba(9,30,66,0.04)] dark:bg-darkStoke border-l-4 border-l-primary bg-opacity-20"
                                              : ""
                                          }
                                          key={id}
                                          onClick={() =>
                                            handleSelectCategory(id)
                                          }
                                        >
                                          {projectCategoryName}
                                        </Option>
                                      );
                                    }
                                  )}
                                </List>
                              </Dropdown>
                            </FormGroup>
                          </FormRow>
                          <FormGroup>
                            <Label
                              onClick={() => {
                                setOpenDesc(true);
                              }}
                            >
                              Description *
                            </Label>
                            {openDesc ? (
                              <>
                                <TextTiny
                                  control="tiny-mce"
                                  name="description"
                                />
                                <div className="flex items-center justify-end gap-x-3">
                                  <Button
                                    kind="cancel"
                                    onClick={() => {
                                      setOpenDesc(false);
                                      resetForm();
                                    }}
                                    type="button"
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    kind="success"
                                    onClick={() => {
                                      setOpenDesc(false);
                                    }}
                                    type="button"
                                  >
                                    Save
                                  </Button>
                                </div>
                              </>
                            ) : (
                              <div
                                className="cursor-pointer dark:text-text4"
                                dangerouslySetInnerHTML={{
                                  __html: values.description,
                                }}
                                onClick={() => {
                                  setOpenDesc(true);
                                }}
                              ></div>
                            )}
                          </FormGroup>
                          <div className=" flex items-center justify-center">
                            <Button
                              isLoading={isSubmitting}
                              type="submit"
                              className=" my-3"
                              kind="success"
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          )}
        </ModalBase>
      )}

      <div className="w-full ">
        <div className=" bg-white dark:bg-darkbg rounded-3xl flex md:flex-row flex-col-reverse gap-y-5 items-center justify-between md:py-8 md:px-10 py-4 px-5">
          <div className="md:w-2/12 md:hover:w-2/6 md:focus-within:w-2/6  transition-all ease-out">
            <HeaderSearch
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setSearch(e.currentTarget.value);
              }}
            ></HeaderSearch>
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
        {loading ? (
          <div className="overflow-x-auto overflow-y-hidden">
            <table className="table-project">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Project name</th>
                  <th>Category name</th>
                  <th>Creator</th>
                  <th>Members</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pageProject.map(
                  ({ members, creator, id, projectName, categoryName }) => {
                    const colorAdmin =
                      admin.name === creator.name ? "text-pink-500" : "";
                    const isActive = creator.id === admin.id;
                    const bgColor =
                      categoryName === "Dự án web"
                        ? "bg-green-100 dark:bg-darkSecondary"
                        : categoryName === "Dự án phần mềm"
                        ? "bg-blue-100 dark:bg-darkSecondary"
                        : "bg-orange-100 dark:bg-darkSecondary";
                    const textColor =
                      categoryName === "Dự án web"
                        ? "text-green-500"
                        : categoryName === "Dự án phần mềm"
                        ? "text-blue-500"
                        : "text-orange-500";
                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>
                          <Link
                            to={`/project-detail/${id}`}
                            className="truncate text-secondary hover:underline cursor-pointer"
                          >
                            {projectName}
                          </Link>
                        </td>
                        <td>
                          <span
                            className={`w-[100px] text-center rounded-lg px-2 py-1 ${bgColor} ${textColor}`}
                          >
                            {categoryName}
                          </span>
                        </td>
                        <td className={`truncate ${colorAdmin}`}>
                          {creator.name}
                        </td>
                        <td>
                          <div className="flex items-center gap-x-2">
                            <Avatar.Group
                              maxCount={2}
                              maxStyle={{
                                color: "#f56a00",
                                backgroundColor: "#fde3cf",
                              }}
                            >
                              {members.map(({ name, avatar, userId }) => (
                                <Tooltip
                                  key={userId}
                                  title={name}
                                  placement="top"
                                >
                                  <Avatar
                                    src={
                                      <img
                                        src={avatar}
                                        alt={`${name} avatar`}
                                      />
                                    }
                                  />
                                </Tooltip>
                              ))}
                            </Avatar.Group>
                            {isActive && (
                              <span
                                onClick={() => {
                                  handleToggleModalMember(id);
                                }}
                                className="w-[32px] h-[32px] cursor-pointer rounded-full border border-dashed flex items-center justify-center text-text3 border-text3 hover:text-text2 hover:border-text2 select-none transition-all"
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
                              </span>
                            )}
                          </div>
                        </td>
                        <td>
                          {creator.id === admin.id && (
                            <div className="flex items-center text-gray-500 ">
                              <span
                                onClick={() => {
                                  handleToggleModal(id);
                                }}
                              >
                                <IconEdit />
                              </span>
                              <span
                                onClick={() => {
                                  handleToggleModalDeteleProject(id);
                                }}
                              >
                                <IconDelete />
                              </span>
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
            <div className="flex items-center justify-end my-5">
              <Pagination
                hideOnSinglePage
                defaultCurrent={currentPage}
                pageSize={pageSize}
                current={currentPage}
                onChange={handlePageChange}
                onShowSizeChange={handlePageSizeChange}
                total={totalItems}
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center bg-lite dark:bg-darkbg h-[400px]">
            <div className="loader bg-lite dark:bg-darkbg p-5 rounded-full flex space-x-3">
              <div className="w-5 h-5 bg-error rounded-full animate-bounce" />
              <div className="w-5 h-5 bg-primary rounded-full animate-bounce" />
              <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Project;
