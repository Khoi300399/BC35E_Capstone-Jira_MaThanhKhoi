import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import IconDelete from "../../components/icons/IconDelete";
import IconEdit from "../../components/icons/IconEdit";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
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
type Props = {};
interface Values {
  name: string;
  description: string;
  category: string;
}
const Project = (props: Props) => {
  const initialValues: Values = {
    name: "",
    description: "",
    category: "",
  };
  const { show, setShow, nodeRef } = useClickOutside();
  const handleToggleDropdown = () => {
    setShow(!show);
  };
  const [openModalBase, setOpenModalBase] = useState<boolean>(false);
  console.log(openModalBase);

  const handleToggleModal = () => {
    setOpenModalBase(true);
  };
  return (
    <>
      <ModalBase
        visible={openModalBase}
        onClose={() => {
          setOpenModalBase(false);
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("This project name already registered"),

            description: Yup.string().required(
              "This description already registered"
            ),
            category: Yup.string().required(
              "This description already registered"
            ),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {({ isSubmitting, errors, setFieldValue }) => {
            const handleSelectCategory = (value: string) => {
              setShow(false);
              setFieldValue("category", value);
            };
            const { name, category } = errors;
            return (
              <Form>
                <div className="relative bg-white min-w-[650px] max-h-[700px] overflow-x-hidden overflow-y-auto rounded-md shadow-lg scrollbar-none">
                  <div className="flex items-start justify-between mx-5 mt-5">
                    <div className=" flex items-center gap-x-3">
                      <div className="text-text2 font-medium">Project ID :</div>
                      <span className="flex items-center justify-center w-[45px] h-[45px] rounded-lg bg-bgInput text-text5 font-semibold select-none">
                        id
                      </span>
                    </div>
                    <span
                      className="text-text2 hover:text-error select-none cursor-pointer"
                      onClick={() => {
                        setOpenModalBase(false);
                      }}
                      // onClick={() => {
                      //   setOpenModalBase(false);
                      // }}
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
                  <div className="bg-white rounded-xl py-10 px-[66px]">
                    <div className="text-center">
                      <h1 className="py-4 px-14  bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block">
                        Update Project 📝
                      </h1>

                      <FormRow>
                        <FormGroup>
                          <Label htmlFor="name">Project name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Please enter project name..."
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label>Project category *</Label>
                          <Dropdown>
                            <Select
                              nodeRef={nodeRef}
                              show={show}
                              placeholder={"Select a project category"}
                              onClick={handleToggleDropdown}
                            />
                            <List show={show}>
                              <Option
                                onClick={() => handleSelectCategory("sadasd")}
                              >
                                1
                              </Option>
                              <Option
                                onClick={() =>
                                  handleSelectCategory("asdasdsad")
                                }
                              >
                                4
                              </Option>
                              <Option
                                onClick={() => handleSelectCategory("asdasd")}
                              >
                                3
                              </Option>
                            </List>
                          </Dropdown>
                        </FormGroup>
                      </FormRow>
                      <FormGroup>
                        <Label>Description *</Label>
                        <TextTiny control="tiny-mce" name="description" />
                      </FormGroup>
                      <div className=" flex items-center justify-center">
                        <Button type="submit" className=" my-3" kind="primary">
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
      </ModalBase>

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
                <div className="flex items-center text-gray-500 ">
                  <span onClick={handleToggleModal}>
                    <IconEdit />
                  </span>
                  <span>
                    {" "}
                    <IconDelete />
                  </span>
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
    </>
  );
};

export default Project;
