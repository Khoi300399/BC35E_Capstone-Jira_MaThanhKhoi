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
import Input from "../../components/Input/Input";
import Slider from "../../components/Slider/Slider";
import FormRow from "../../components/common/FormRow/FormRow";
import TextTiny from "../../components/Input/TextTiny";
import Button from "../../components/Button/Button";
import FormConfirm from "../../components/common/FormConfirm/FormConfirm";
import InputDate from "../../components/Input/InputDate";

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
    show: priority,
    setShow: setPriority,
    nodeRef: priorityRef,
  } = useClickOutside();
  const handleTogglePriority = () => {
    setPriority(!priority);
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
                    <div className="w-2/4"></div>

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
                    <div className="w-[60%] overflow-x-hidden overflow-y-auto max-h-[500px] scrollbar-none ">
                      <h1 className="font-medium text-2xl text-text2 mb-5">
                        Bài tập cuối khóa
                      </h1>
                      <FormGroup>
                        <Label>Description *</Label>
                        <TextTiny control="tiny-mce" name="description" />
                        <div className="flex items-center  gap-x-3 ">
                          <Button type="button" kind="cancel">
                            Cancel
                          </Button>
                          <Button type="button" kind="success">
                            Save
                          </Button>
                        </div>
                      </FormGroup>
                      <div className=" flex items-center justify-between gap-x-3 mb-2">
                        <Avatar
                          size={40}
                          src={<img src={url} alt="avatar" />}
                        />
                        <Textarea
                          className="pt-2 h-10"
                          name="comment"
                          placeholder="Add a comment ..."
                        ></Textarea>
                        <Button type="button" kind="success">
                          Send
                        </Button>
                      </div>
                    </div>
                    <div className="w-[40%] pr-5 overflow-x-hidden overflow-y-auto h-[500px] max-h-[500px] scrollbar-thumb-stone-300 scrollbar-track-slate-100 scrollbar-thin ">
                      <FormRow>
                        <FormGroup>
                          <Label>Priority</Label>
                          <Dropdow>
                            <Select
                              className=" text-text2 bg-bgInput"
                              nodeRef={priorityRef}
                              placeholder="High"
                              onClick={handleTogglePriority}
                              show={priority}
                            ></Select>
                            <List show={priority}>
                              <Option
                                className="hover:bg-gray-200 "
                                onClick={() => handleSelectTaskType("sadasd")}
                              >
                                1
                              </Option>
                              <Option
                                className="hover:bg-gray-200 "
                                onClick={() =>
                                  handleSelectTaskType("asdasdsad")
                                }
                              >
                                4
                              </Option>
                              <Option
                                className="hover:bg-gray-200 "
                                onClick={() => handleSelectTaskType("asdasd")}
                              >
                                3
                              </Option>
                            </List>
                          </Dropdow>
                        </FormGroup>
                        <FormGroup>
                          <Label>Task Type</Label>
                          <Dropdow>
                            <Select
                              className=" text-text2 bg-bgInput"
                              nodeRef={taskTypeRef}
                              placeholder="bug"
                              onClick={handleToggleTaskType}
                              show={taskType}
                            ></Select>
                            <List show={taskType}>
                              <Option
                                className="hover:bg-gray-200 "
                                onClick={() => handleSelectTaskType("sadasd")}
                              >
                                1
                              </Option>
                              <Option
                                className="hover:bg-gray-200 "
                                onClick={() =>
                                  handleSelectTaskType("asdasdsad")
                                }
                              >
                                4
                              </Option>
                              <Option
                                className="hover:bg-gray-200 "
                                onClick={() => handleSelectTaskType("asdasd")}
                              >
                                3
                              </Option>
                            </List>
                          </Dropdow>
                        </FormGroup>
                      </FormRow>
                      <FormGroup>
                        <Label>Status</Label>
                        <Dropdow>
                          <Select
                            nodeRef={statusRef}
                            placeholder="BACKLOG"
                            onClick={handleToggleStatus}
                            show={status}
                          ></Select>
                          <List show={status}>
                            <Option
                              className="hover:text-[#42526e]  hover:bg-[rgba(9,30,66,0.04)] "
                              onClick={() => handleSelectStatus("sadasd")}
                            >
                              1
                            </Option>
                            <Option
                              className="hover:text-[#42526e]  hover:bg-[rgba(9,30,66,0.04)] "
                              onClick={() => handleSelectStatus("asdasdsad")}
                            >
                              4
                            </Option>
                            <Option
                              className="hover:text-[#42526e]  hover:bg-[rgba(9,30,66,0.04)] "
                              onClick={() => handleSelectStatus("asdasd")}
                            >
                              3
                            </Option>
                          </List>
                        </Dropdow>
                      </FormGroup>
                      <FormGroup>
                        <Label>Assigness</Label>
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

                      <FormGroup>
                        <Label>Time Tracking</Label>
                        <Slider
                          name="Tracking"
                          min={0}
                          max={100}
                          defaultValue={30}
                        ></Slider>
                      </FormGroup>
                      <FormRow>
                        <FormGroup>
                          <Label>Original Estimate (hours)</Label>
                          <Input
                            className="appearance-none bg-bgInput"
                            id="estimate"
                            name="estimate"
                            type="text"
                            placeholder="Original Estimate..."
                          ></Input>
                        </FormGroup>
                        <FormGroup>
                          <Label>Time Spent (hours)</Label>
                          <Input
                            className="appearance-none bg-bgInput"
                            id="estimate"
                            name="estimate"
                            type="text"
                            placeholder="Time Spent..."
                          ></Input>
                        </FormGroup>
                      </FormRow>
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
