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
} from "./SignLog.elements";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userRedux";
import { Link, useNavigate } from "react-router-dom";

const SignLog = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    // Marked as async
    e.preventDefault();
    try {
      await dispatch(login(inputs)).unwrap(); // Await the async operation
      navigate("/train"); // Redirect on successful login
    } catch (error) {
      // Assuming getArabicErrorMessage is a function that converts error messages
      // If not defined, directly use error.message or a default error string
      setErrorMessage(error.message || "Login failed.");
    }
  };

  return (
    <SignContainer>
      <LoginContainer>
        <LoginSignHeader>تسجيل دخول</LoginSignHeader>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        <SignUpForm onSubmit={handleSubmit}>
          <LoginSignSubHeader>اسم المستخدم</LoginSignSubHeader>
          <LoginSignInput
            name="username"
            placeholder="اسم المستخدم"
            onChange={handleChange}
          />

          <LoginSignSubHeader>الرقم السري</LoginSignSubHeader>
          <LoginSignInput
            type="password"
            name="password"
            placeholder="الباسورد"
            onChange={handleChange}
          />

          <SignButton>تسجيل الدخول</SignButton>
        </SignUpForm>
        <LoginSignPara>
          بتسجيل الدخول، أنت توافق على شروط استخدام ١٢انجليش. يُرجى الاطلاع على
          إشعار الخصوصية الخاص بنا، وإشعار الكوكيز، وإشعار الإعلانات المستندة
          إلى الاهتمامات.
        </LoginSignPara>
        <Link to={"/signup"}>
          <RegistarButton type="submit">تسجيل حساب جديد</RegistarButton>
        </Link>
      </LoginContainer>
    </SignContainer>
  );
};

export default SignLog;
