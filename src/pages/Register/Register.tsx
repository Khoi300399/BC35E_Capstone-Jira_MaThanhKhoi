import useToggle from "../../hooks/useToggle";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";
import IconEyeToggle from "../../components/icons/IconEyeToggle";
import FormTemplate from "../../templates/FormTemplate/FormTemplate";
import FormGroup from "../../components/common/FormGroup/FormGroup";
import CheckBox from "../../components/CheckBox/CheckBox";
import Button from "../../components/Button/Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import ButtonGoogle from "../../components/ButtonGoogle/ButtonGoogle";

type Props = {};

interface Values {
  name: string;
  email: string;
  phone: string;
  password: string;
}
const Register = (props: Props) => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const initialValues: Values = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggle();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggle();

  return (
    <FormTemplate heading="Sing Up">
      <p className="mb-6 font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link to={"/login"} className="font-medium underline text-primary">
          {" "}
          Sign in
        </Link>
      </p>
      <ButtonGoogle text="Sign up with google" />
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white dark:border-text3">
        Or sign up with email
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("This name already registered"),
          email: Yup.string()
            .required("This email already registered")
            .email("Invalid email address"),
          phone: Yup.string()
            .required("This phone already registered")
            .matches(phoneRegExp, "Phone number is not valid"),

          password: Yup.string()
            .required("This password already registered")
            .min(8, "Password must be 8 character "),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 300);
        }}
      >
        {({ isSubmitting, errors }) => {
          const { name, email, phone, password } = errors;
          return (
            <Form>
              <FormGroup>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={!name ? "Please enter your name ..." : ""}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={!email ? "Please enter your email ..." : ""}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder={!phone ? "Please enter your phone ..." : ""}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={
                    !password ? "Please enter your password ..." : ""
                  }
                >
                  <IconEyeToggle
                    open={showPassword}
                    onClick={handleTogglePassword}
                  />
                </Input>
              </FormGroup>

              <CheckBox
                name="term"
                checked={acceptTerm}
                onClick={handleToggleTerm}
              >
                <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3">
                  I agree to the{" "}
                  <span className="underline text-secondary">Terms of Use</span>{" "}
                  and have read and understand the{" "}
                  <span className="underline text-secondary">
                    Privacy policy
                  </span>
                  .
                </p>
              </CheckBox>

              <Button
                type="submit"
                className="w-full text-white bg-primary"
                isLoading={isSubmitting}
              >
                Create my account
              </Button>
            </Form>
          );
        }}
      </Formik>
    </FormTemplate>
  );
};

export default Register;