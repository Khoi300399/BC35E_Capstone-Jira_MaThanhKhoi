import React, { Fragment, useState, useEffect } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Select as Selects, Avatar } from "antd";
import Input from "../../components/Input/Input";
import Dropdown from "../../components/Dropdown/Dropdow";
import Select from "../../components/Dropdown/Select";
import List from "../../components/Dropdown/List";
import useClickOutside from "../../hooks/useClickOutside";
import Option from "../../components/Dropdown/Option";
import FormRow from "../../components/common/FormRow/FormRow";
import TextTiny from "../../components/Input/TextTiny";
import Button from "../../components/Button/Button";
import Dropdow from "../../components/Dropdown/Dropdow";
import FormGroup from "../../components/common/FormGroup/FormGroup";
import Label from "../../components/Label/Label";
import SelectTag from "../../components/Dropdown/SelectTag";
import ListTag from "../../components/Dropdown/ListTag";
import OptionTag from "../../components/Dropdown/OptionTag";
import Slider from "../../components/Slider/Slider";

type Props = {};
interface Values {
  listUserAsign: number[];
  taskName: string;
  description: string;
  statusId: string;
  originalEstimate: number;
  timeTrackingSpent: number;
  timeTrackingRemaining: number;
  projectId: number;
  typeId: number;
  priorityId: number;
}
const { Option: Options } = Selects;
const Task = (props: Props) => {
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

  const initialValues: Values = {
    listUserAsign: [],
    taskName: "string",
    description: "string",
    statusId: "string",
    originalEstimate: 0,
    timeTrackingSpent: 0,
    timeTrackingRemaining: 0,
    projectId: 0,
    typeId: 0,
    priorityId: 0,
  };
  const {
    show: project,
    setShow: setProject,
    nodeRef: projectRef,
  } = useClickOutside();
  const {
    show: status,
    setShow: setStatus,
    nodeRef: statusRef,
  } = useClickOutside();
  const {
    show: priority,
    setShow: setPriority,
    nodeRef: priorityRef,
  } = useClickOutside();
  const {
    show: taskType,
    setShow: setTaskType,
    nodeRef: taskTypeRef,
  } = useClickOutside();
  const [category, setCategory] = useState("");
  const handleToggleProject = () => {
    setProject(!project);
  };
  const handleToggleStatus = () => {
    setStatus(!status);
  };
  const handleTogglePriority = () => {
    setPriority(!priority);
  };
  const handleToggleTaskType = () => {
    setTaskType(!taskType);
  };
  return (
    <Fragment>
      <div className="bg-white rounded-xl py-10 px-[66px]">
        <div className="text-center">
          <h1 className="py-4 px-14  bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block">
            Create Task 🐱
          </h1>

          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
              listUserAsign: Yup.string().required(
                "This project name already registered"
              ),

              taskName: Yup.string().required(
                "This description already registered"
              ),
              description: Yup.string().required(
                "This description already registered"
              ),
              statusId: Yup.string().required(
                "This description already registered"
              ),
              originalEstimate: Yup.string().required(
                "This description already registered"
              ),
              timeTrackingSpent: Yup.string().required(
                "This description already registered"
              ),
              timeTrackingRemaining: Yup.string().required(
                "This description already registered"
              ),
              projectId: Yup.string().required(
                "This description already registered"
              ),
              typeId: Yup.string().required(
                "This description already registered"
              ),
              typpriorityIdeId: Yup.string().required(
                "This description already registered"
              ),
            })}
            onSubmit={(values, { setSubmitting }) => {}}
          >
            {({ isSubmitting, errors, setFieldValue, values }) => {
              const handleSelectProject = (value: string) => {
                setProject(false);
                console.log("category", value);
              };
              const handleSelectStatus = (value: string) => {
                setStatus(!status);
              };
              const handleSelectPriority = (value: string) => {
                setPriority(!priority);
              };
              const handleSelectTaskType = (value: string) => {
                setTaskType(!taskType);
              };
              const handleChange = (value: string[]) => {
                setFieldValue("listUserAsign", value);
              };

              const {
                listUserAsign,
                taskName,
                description,
                statusId,
                originalEstimate,
                timeTrackingSpent,
                timeTrackingRemaining,
                projectId,
                typeId,
                priorityId,
              } = errors;
              return (
                <Form>
                  <FormRow>
                    <FormGroup>
                      <Label htmlFor="name">Task name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Please enter task name..."
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Project name *</Label>
                      <Dropdown>
                        <Select
                          className="max-w-full text-text5 bg-[rgba(9,30,66,0.04)]"
                          nodeRef={projectRef}
                          show={project}
                          placeholder="Select a project category"
                          onClick={handleToggleProject}
                        />
                        <List show={project}>
                          <Option onClick={() => handleSelectProject("sadasd")}>
                            1
                          </Option>
                          <Option
                            onClick={() => handleSelectProject("asdasdsad")}
                          >
                            4
                          </Option>
                          <Option onClick={() => handleSelectProject("asdasd")}>
                            3
                          </Option>
                        </List>
                      </Dropdown>
                    </FormGroup>
                  </FormRow>
                  <FormRow className="grid-cols-2">
                    <FormGroup>
                      <Label>Priority *</Label>
                      <Dropdown>
                        <Select
                          nodeRef={priorityRef}
                          show={priority}
                          placeholder={
                            !category ? "Select a project category" : category
                          }
                          onClick={handleTogglePriority}
                        />
                        <List show={priority}>
                          <Option
                            onClick={() => handleSelectPriority("sadasd")}
                          >
                            1
                          </Option>
                          <Option
                            onClick={() => handleSelectPriority("asdasdsad")}
                          >
                            4
                          </Option>
                          <Option
                            onClick={() => handleSelectPriority("asdasd")}
                          >
                            3
                          </Option>
                        </List>
                      </Dropdown>
                    </FormGroup>
                    <FormGroup>
                      <Label>Task Type *</Label>
                      <Dropdown>
                        <Select
                          nodeRef={taskTypeRef}
                          show={taskType}
                          placeholder="Select a project category"
                          onClick={handleToggleTaskType}
                        />
                        <List show={taskType}>
                          <Option
                            onClick={() => handleSelectTaskType("sadasd")}
                          >
                            1
                          </Option>
                          <Option
                            onClick={() => handleSelectTaskType("asdasdsad")}
                          >
                            4
                          </Option>
                          <Option
                            onClick={() => handleSelectTaskType("asdasd")}
                          >
                            3
                          </Option>
                        </List>
                      </Dropdown>
                    </FormGroup>
                  </FormRow>
                  <FormRow>
                    <FormGroup>
                      <FormGroup>
                        <Label>Status *</Label>
                        <Dropdown>
                          <Select
                            nodeRef={statusRef}
                            show={status}
                            placeholder="Select a status"
                            onClick={handleToggleStatus}
                          />
                          <List show={status}>
                            <Option
                              onClick={() => handleSelectStatus("sadasd")}
                            >
                              1
                            </Option>
                            <Option
                              onClick={() => handleSelectStatus("asdasdsad")}
                            >
                              4
                            </Option>
                            <Option
                              onClick={() => handleSelectStatus("asdasd")}
                            >
                              3
                            </Option>
                          </List>
                        </Dropdown>
                      </FormGroup>
                    </FormGroup>
                    <FormGroup>
                      <Label>Assigness</Label>
                      <Dropdow>
                        <SelectTag
                          className="max-w-full text-text5 bg-[rgba(9,30,66,0.04)]"
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
                  </FormRow>
                  <FormRow className="grid-cols-3">
                    <FormGroup>
                      <Label>Time Tracking</Label>
                      <Slider
                        name="Tracking"
                        min={0}
                        max={100}
                        defaultValue={30}
                      ></Slider>
                    </FormGroup>
                    <FormGroup>
                      <Label>Original Estimate (hours)</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Original Estimate..."
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Time Spent (hours)</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Time Spent..."
                      />
                    </FormGroup>
                  </FormRow>

                  <FormGroup>
                    <Label>Description *</Label>
                    <TextTiny control="tiny-mce" name="description" />
                  </FormGroup>

                  <div className=" flex items-center justify-center">
                    <Button type="submit" className=" my-3" kind="primary">
                      Add new task
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </Fragment>
  );
};

export default Task;
