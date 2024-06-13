import React, { useState, useEffect } from "react";
import {
  LoginContainer,
  RegistarButton,
  SignButton,
  LoginSignHeader,
  LoginSignInput,
  LoginSignPara,
  LoginSignSubHeader,
  SignContainer,
  SignUpForm,
  ErrorCon,
  LoaderContainer,
  Loader,
  StyledLink,
} from "./SignLog.elements";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userRedux";
import { Link, useNavigate } from "react-router-dom";

const SignLog = () => {
  const [inputs, setInputs] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await dispatch(login(inputs)).unwrap();
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message || "Login failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SignContainer>
      <LoginContainer>
        <LoginSignHeader>تسجيل دخول</LoginSignHeader>
        {errorMessage && <ErrorCon>{errorMessage}</ErrorCon>}
        <SignUpForm onSubmit={handleSubmit}>
          <LoginSignSubHeader>
            اسم المستخدم أو البريد الإلكتروني
          </LoginSignSubHeader>
          <LoginSignInput
            name="usernameOrEmail" // Change the name to a more general one
            placeholder="اسم المستخدم أو البريد الإلكتروني"
            onChange={handleChange}
          />
          <LoginSignSubHeader>الرقم السري</LoginSignSubHeader>
          <LoginSignInput
            type="password"
            name="password"
            placeholder="الباسورد"
            onChange={handleChange}
          />
          <SignButton disabled={isLoading}>
            {isLoading ? (
              <LoaderContainer>
                <Loader />
              </LoaderContainer>
            ) : (
              "تسجيل الدخول"
            )}
          </SignButton>
        </SignUpForm>
        <LoginSignPara>
          بتسجيل الدخول، أنت توافق على شروط استخدام فلونت فوكس. يُرجى الاطلاع
          على <Link to={"/condition"}>اشعارات الخصوصية الخاص بنا</Link>، وإشعار
          الكوكيز، وإشعار الإعلانات المستندة إلى الاهتمامات.
        </LoginSignPara>
        <StyledLink to={"/forgotpassword"}>نسيت كلمة المرور</StyledLink>
        <Link to={"/signup"}>
          <RegistarButton>تسجيل حساب جديد</RegistarButton>
        </Link>
      </LoginContainer>
    </SignContainer>
  );
};

export default SignLog;
