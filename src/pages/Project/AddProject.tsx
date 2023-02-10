import React, { Fragment, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Dropdown from "../../components/Dropdown/Dropdow";
import Select from "../../components/Dropdown/Select";
import List from "../../components/Dropdown/List";
import useClickOutside from "../../hooks/useClickOutside";
import Option from "../../components/Dropdown/Option";
import FormRow from "../../components/common/FormRow/FormRow";
import FormGroup from "../../components/common/FormGroup/FormGroup";
import TextTiny from "../../components/Input/TextTiny";
import Button from "../../components/Button/Button";

type Props = {};
interface Values {
  name: string;
  description: string;
  category: string;
}
const AddProject = (props: Props) => {
  const initialValues: Values = {
    name: "",
    description: "",
    category: "",
  };
  const { show, setShow, nodeRef } = useClickOutside();
  const handleToggleDropdown = () => {
    setShow(!show);
  };
  const [category, setCategory] = useState("");

  return (
    <Fragment>
      <div className="bg-white rounded-xl py-10 px-[66px]">
        <div className="text-center">
          <h1 className="py-4 px-14  bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block">
            Start a Project 🚀
          </h1>

          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
              name: Yup.string().required(
                "This project name already registered"
              ),

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
                            onClick={() => handleSelectCategory("asdasdsad")}
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
                      Add new project
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

export default AddProject;
