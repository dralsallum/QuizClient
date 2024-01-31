import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, signIn } from "../redux/userRedux"; // Adjust the import path
import {
  LoginContainer,
  RegistarButton,
  SignButton,
  LoginSignHeader,
  LoginSignInput,
  LoginSignPara,
  LoginSignSubHeader,
  SignContainer,
  RedirectButton,
  SignUpForm,
} from "../components/SignForm/SignForm.elements";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components";

const SignForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      register({ email: formInputs.email, password: formInputs.password })
    );
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(signIn({ email: formInputs.email, password: formInputs.password }))
      .unwrap()
      .then(() => {
        navigate("/train");
      })
      .catch((error) => {
        setErrorMessage(getArabicErrorMessage(error.message));
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
  return (
    <SignContainer>
      <Navbar />
      <LoginContainer>
        <LoginSignHeader>تسجيل دخول</LoginSignHeader>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        <SignUpForm onSubmit={handleSignIn}>
          <LoginSignSubHeader>ايميل</LoginSignSubHeader>
          <LoginSignInput
            name="email"
            placeholder="الايميل"
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
          <RegistarButton>تسجيل حساب جديد</RegistarButton>
        </Link>
      </LoginContainer>
    </SignContainer>
  );
};

export default SignForm;
