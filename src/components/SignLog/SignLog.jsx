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
import { login, loginStart } from "../../redux/userRedux";
import { Link } from "react-router-dom";

const SignLog = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(inputs)) // Dispatch login thunk with inputs
      .unwrap()
      .catch((rejectedValueOrSerializedError) => {
        // Handle the error here. `rejectedValueOrSerializedError` will be the error message
        setErrorMessage(rejectedValueOrSerializedError);
      });
  };

  const getArabicErrorMessage = (englishMessage) => {
    switch (englishMessage) {
      case "The email address is already in use by another account.":
        return "عنوان البريد الإلكتروني مستخدم بالفعل من قبل حساب آخر.";
      case "Invalid password":
        return "يجب أن تكون كلمة المرور مكونة من 6 عناصر وتحتوي على أحرف وأرقام.";
      // ... add other translations as needed
      default:
        return "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى.";
    }
  };

  const isValidPassword = (password) => {
    const hasNumber = /\d/; // This tests for a number
    const hasLetter = /[a-zA-Z]/; // This tests for a letter
    return (
      password.length >= 6 &&
      hasNumber.test(password) &&
      hasLetter.test(password)
    );
  };

  const extractEmailPrefix = (email) => {
    return email.split("@")[0];
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
