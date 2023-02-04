import { memo } from "react";
import { Avatar } from "antd";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useState, useEffect } from "react";
import Textarea from "../../components/Input/Textarea";
import ModalBase from "../../components/Modal/ModalBase";
import Dropdow from "../../components/Dropdown/Dropdow";
import Select from "../../components/Dropdown/Select";
import List from "../../components/Dropdown/List";
import Option from "../../components/Dropdown/Option";
import useClickOutside from "../../hooks/useClickOutside";
import FormGroup from "../../components/common/FormGroup/FormGroup";
import Label from "../../components/Label/Label";
import SelectTag from "../../components/Dropdown/SelectTag";
import ListTag from "../../components/Dropdown/ListTag";
import OptionTag from "../../components/Dropdown/OptionTag";
import axios from "axios";

type Props = {};

const Comment = (props: Props) => {
  const url = "https://api.dicebear.com/5.x/fun-emoji/svg?seed=Ginger";
  const [openModalBase, setOpenModalBase] = useState<boolean>(false);
  const [user, setUser] = useState<any[]>([]);
  const [addUser, setAddUser] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");
  const { nodeRef, show: userTag, setShow: setUserTag } = useClickOutside();
  const searchFilter = (data: any[]) => {
    return data?.filter((item) =>
      item?.lastName.toLowerCase().includes(search)
    );
  };

  const removeUser = (id: number) => {
    setAddUser(addUser.filter((item) => item.id !== id));
  };
  const clearListUser = () => {
    setAddUser(addUser.slice(addUser.length, addUser.length));
  };
  console.log(addUser);

  useEffect(() => {
    const res = axios
      .get("https://dummyjson.com/users")
      .then((res) => setUser(res?.data?.users));
  }, []);

  const {
    show: taskType,
    setShow: setTaskType,
    nodeRef: taskTypeRef,
  } = useClickOutside();
  const handleToggleTaskType = () => {
    setTaskType(!taskType);
  };

  const {
    show: status,
    setShow: setStatus,
    nodeRef: statusRef,
  } = useClickOutside();
  const handleToggleStatus = () => {
    setStatus(!status);
  };
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, setFieldValue, values }) => {
        const handleSelectTaskType = (value: string) => {
          setTaskType(!taskType);
        };
        const handleSelectStatus = (value: string) => {
          setStatus(!status);
        };
        return (
          <Form>
            <div id="comment">
              <button
                onClick={() => {
                  setOpenModalBase(true);
                }}
                className="p-5 rounded-lg text-center text-white bg-blue-400"
              >
                Open modal base
              </button>
              <ModalBase
                visible={openModalBase}
                onClose={() => {
                  setOpenModalBase(false);
                }}
              >
                <div className="relative bg-white min-w-[1280px] rounded-md shadow-lg">
                  <button
                    onClick={() => {
                      setOpenModalBase(false);
                    }}
                    className="absolute px-3 py-1 rounded-full top-0 right-0 -translate-y-2/4 translate-x-2/4 bg-error bg-opacity-20 hover:bg-opacity-50 transition-all ease-linear cursor-pointer"
                  >
                    <i className="fa-solid fa-xmark text-3xl text-red-600"></i>
                  </button>
                  <div className="px-12 pt-7 pb-4 flex items-center justify-between">
                    <div className="flex items-baseline gap-x-2">
                      <i className="fa-solid fa-square-check text-blue-500"></i>
                      <span>Title of task</span>
                    </div>
                    <div className="flex items-center gap-x-8">
                      <button className="flex items-baseline justify-center gap-2 text-[#42526e] bg-[rgba(9,30,66,0.04)] px-3 py-1 hover:bg-gray-200 rounded transition-all ease-linear">
                        <i className="fa-regular fa-paper-plane "></i>
                        <span>Give Feedback</span>
                      </button>
                      <button className="flex items-baseline justify-center gap-2 text-[#42526e] bg-[rgba(9,30,66,0.04)] px-3 py-1 hover:bg-gray-200 rounded transition-all ease-linear">
                        <i className="fa-solid fa-link"></i>
                        <span>Link Issue</span>
                      </button>
                      <button className="flex items-center justify-center text-[#42526e] bg-[rgba(9,30,66,0.04)] hover:bg-error hover:bg-opacity-20 hover:text-error transition-all ease-linear w-10 h-10 rounded text-xl">
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    </div>
                  </div>

                  <div className=" flex items-start justify-between gap-x-20 pl-8 pr-5 pb-8">
                    <div className="w-[60%] overflow-x-hidden overflow-y-auto max-h-[500px]">
                      <h1 className="font-medium text-2xl text-[#172b4d] mb-5">
                        Bài tập cuối khóa
                      </h1>
                      <div className=" flex items-center justify-between gap-x-3">
                        <Avatar
                          size={40}
                          src={<img src={url} alt="avatar" />}
                        />
                        <Textarea
                          name="comment"
                          placeholder="Add a comment ..."
                        ></Textarea>
                      </div>
                    </div>
                    <div className="w-[40%] pr-5 overflow-x-hidden overflow-y-auto h-[500px] max-h-[500px] scrollbar-thumb-primary  scrollbar-thin scrollbar-track-white">
                      <FormGroup>
                        <Dropdow>
                          <Select
                            nodeRef={taskTypeRef}
                            className="w-2/6 text-text5 bg-select"
                            placeholder="To do"
                            onClick={handleToggleTaskType}
                            show={taskType}
                          ></Select>
                          <List show={taskType} className="w-2/6">
                            <Option
                              className="hover:bg-gray-200 hover:border-l-4 hover:border-l-blue-500"
                              onClick={() => handleSelectTaskType("sadasd")}
                            >
                              1
                            </Option>
                            <Option
                              className="hover:bg-gray-200 hover:border-l-4 hover:border-l-blue-500"
                              onClick={() => handleSelectTaskType("asdasdsad")}
                            >
                              4
                            </Option>
                            <Option
                              className="hover:bg-gray-200 hover:border-l-4 hover:border-l-blue-500"
                              onClick={() => handleSelectTaskType("asdasd")}
                            >
                              3
                            </Option>
                          </List>
                        </Dropdow>
                      </FormGroup>
                      <FormGroup>
                        <Label>Status *</Label>
                        <Dropdow>
                          <Select
                            nodeRef={statusRef}
                            placeholder="DONE"
                            onClick={handleToggleStatus}
                            show={status}
                          ></Select>
                          <List show={status}>
                            <Option
                              className="hover:text-[#42526e]  hover:bg-[rgba(9,30,66,0.04)] hover:border-l-4  hover:border-l-blue-500"
                              onClick={() => handleSelectStatus("sadasd")}
                            >
                              1
                            </Option>
                            <Option
                              className="hover:text-[#42526e]  hover:bg-[rgba(9,30,66,0.04)] hover:border-l-4 hover:border-l-blue-500"
                              onClick={() => handleSelectStatus("asdasdsad")}
                            >
                              4
                            </Option>
                            <Option
                              className="hover:text-[#42526e]  hover:bg-[rgba(9,30,66,0.04)] hover:border-l-4 hover:border-l-blue-500"
                              onClick={() => handleSelectStatus("asdasd")}
                            >
                              3
                            </Option>
                          </List>
                        </Dropdow>
                      </FormGroup>
                      <FormGroup>
                        <Label>Status *</Label>
                        <Dropdow>
                          <SelectTag
                            onClick={() => {
                              setUserTag(!userTag);
                            }}
                            nodeRef={nodeRef}
                            data={addUser}
                            show={userTag}
                            removeUser={removeUser}
                            clearListUser={clearListUser}
                            searchFilter={(
                              e: React.FormEvent<HTMLInputElement>
                            ) => {
                              setSearch(e.currentTarget.value);
                            }}
                            placeholder="Search assigness ..."
                          ></SelectTag>
                          <ListTag show={userTag}>
                            {searchFilter(user)?.map((user) => {
                              const userExists = addUser.find(
                                (u) => u.id === user.id
                              );
                              return (
                                <div key={user.id}>
                                  <OptionTag
                                    className={`${
                                      userExists
                                        ? "text-[#42526e]  bg-[rgba(9,30,66,0.04)] border-l-4 border-l-primary"
                                        : null
                                    }`}
                                    onClick={() => {
                                      if (userExists)
                                        setAddUser((s) =>
                                          s.filter((u) => u.id !== user.id)
                                        );
                                      else setAddUser((s) => s && [...s, user]);
                                    }}
                                  >
                                    <div className="flex items-center gap-x-3">
                                      <Avatar
                                        size={25}
                                        src={
                                          <img src={user.image} alt="avatar" />
                                        }
                                      />
                                      <span> {user.lastName}</span>
                                    </div>
                                    {userExists && (
                                      <span className="text-primary">
                                        <i className="fa-solid fa-check"></i>
                                      </span>
                                    )}
                                  </OptionTag>
                                </div>
                              );
                            })}
                          </ListTag>
                        </Dropdow>
                      </FormGroup>
                    </div>
                  </div>
                </div>
              </ModalBase>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default memo(Comment);
