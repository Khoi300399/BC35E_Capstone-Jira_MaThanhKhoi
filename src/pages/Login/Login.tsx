import useToggle from "../../hooks/useToggle";
import Label from "../../components/Label/Label";
import Input from "../../components/Input/Input";
import IconEyeToggle from "../../components/icons/IconEyeToggle";
import FormTemplate from "../../templates/FormTemplate/FormTemplate";
import FormGroup from "../../components/common/FormGroup/FormGroup";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ButtonGoogle from "../../components/ButtonGoogle/ButtonGoogle";
import { userType } from "../../types/global";
import { loginApi } from "../../redux/userReducer/userReducer";
import { useDispatch } from "react-redux";
import { DispathType } from "../../redux/config";

type Props = {};

const Login = (props: Props) => {
  const dispath: DispathType = useDispatch();

  const initialValues: userType = {
    email: "",
    passWord: "",
  };

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggle();
  return (
    <FormTemplate heading="Welcome Back!">
      <p className="text-center  font-normal lg:text-sm text-text3 lg:mb-8 mb-6">
        Dont have an account?{" "}
        <Link to={"/login"} className="text-primary font-medium underline">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google" />
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          email: Yup.string().required(" ").email(" "),

          passWord: Yup.string().required(" ").min(3, " "),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            setSubmitting(false);
            const actionAsync = loginApi(values);
            dispath(actionAsync);
          }, 500);
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <FormGroup>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Please enter your email ..."
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="passWord">Password *</Label>
                <Input
                  id="passWord"
                  name="passWord"
                  type={showPassword ? "text" : "password"}
                  placeholder="Please enter your password ..."
                >
                  <IconEyeToggle
                    open={showPassword}
                    onClick={handleTogglePassword}
                  />
                </Input>
              </FormGroup>

              <FormGroup>
                <div className="text-right">
                  <span className="inline-block text-primary text-sm font-medium">
                    Forgot password
                  </span>
                </div>
              </FormGroup>

              <Button
                type="submit"
                className="w-full bg-primary text-white"
                isLoading={isSubmitting}
              >
                Sign in
              </Button>
            </Form>
          );
        }}
      </Formik>
    </FormTemplate>
  );
};

export default Login;
