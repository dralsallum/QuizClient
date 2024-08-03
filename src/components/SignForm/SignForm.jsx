import React, { useState } from "react";
import {
  LoginContainer,
  SignButton,
  LoginSignHeader,
  LoginSignInput,
  LoginSignPara,
  LoginSignSubHeader,
  SignContainer,
  SignUpForm,
  LoaderContainer,
  Loader,
  RegistarButton,
} from "./SignForm.elements";
import { useDispatch } from "react-redux";
import { register } from "../../redux/userRedux";
import { Link, useNavigate } from "react-router-dom";

const SignForm = () => {
  const [inputs, setInputs] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getArabicErrorMessage = (englishMessage) => {
    switch (englishMessage) {
      case "Username already in use":
        return "هذا الاسم مستخدم من قبل";
      case "Email already in use":
        return "عنوان البريد الإلكتروني مستخدم بالفعل";
      case "The email address is already in use by another account.":
        return "عنوان البريد الإلكتروني مستخدم بالفعل من قبل حساب آخر.";
      case "Invalid password":
        return "يجب أن تكون كلمة المرور مكونة من 6 عناصر وتحتوي على أحرف وأرقام.";
      default:
        return "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    try {
      await dispatch(register(inputs)).unwrap();
      navigate("/");
    } catch (error) {
      setErrorMessage(
        getArabicErrorMessage(error.message || "Registration failed.")
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SignContainer>
      <LoginContainer>
        <LoginSignHeader>تسجيل دخول</LoginSignHeader>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
        <SignUpForm onSubmit={handleSubmit}>
          <LoginSignSubHeader>اسم مستخدم</LoginSignSubHeader>
          <LoginSignInput
            name="username"
            placeholder="اسم المستخدم"
            onChange={handleChange}
          />
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
          <SignButton disabled={isLoading}>
            {isLoading ? (
              <LoaderContainer>
                <Loader />
              </LoaderContainer>
            ) : (
              "انشاء حساب جديد "
            )}
          </SignButton>
        </SignUpForm>
        <LoginSignPara>
          بتسجيل الدخول، أنت توافق على شروط استخدام فلونت فوكس. يُرجى الاطلاع
          على <Link to={"/condition"}>اشعارات الخصوصية الخاص بنا</Link>، وإشعار
          الكوكيز، وإشعار الإعلانات المستندة إلى الاهتمامات.
        </LoginSignPara>
        <Link to={"/login"}>
          <RegistarButton>املك حساب من قبل</RegistarButton>
        </Link>
      </LoginContainer>
    </SignContainer>
  );
};

export default SignForm;
