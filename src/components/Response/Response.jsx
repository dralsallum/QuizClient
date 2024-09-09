import React, { useState } from "react";
import {
  ResetContainer,
  ResetFormContainer,
  ResetHeader,
  ResetSubHeader,
  ResetInput,
  ResetButton,
  ErrorContainer,
  SuccessContainer,
} from "./Response.elements";
import { publicRequest } from "../../requestMethods";

const Response = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await publicRequest.post(
        "/users/reset-password-request",
        { email }
      );
      setMessage(
        response.data.message || "الرقم السري لحسابك تم ارساله الى ايميلك"
      );
    } catch (error) {
      setMessage(error.response?.data?.message || "فشل في اتمام العملية");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ResetContainer>
      <ResetFormContainer>
        <ResetHeader>اعادة تعيين كلمة المرور</ResetHeader>
        {message &&
          (message.includes("sent") ? (
            <SuccessContainer>{message}</SuccessContainer>
          ) : (
            <ErrorContainer>{message}</ErrorContainer>
          ))}
        <form onSubmit={handleSubmit}>
          <ResetSubHeader>أدخل البريد الإلكتروني</ResetSubHeader>
          <ResetInput
            type="email"
            name="email"
            placeholder="أدخل البريد الإلكتروني"
            value={email}
            onChange={handleChange}
            required
          />
          <ResetButton disabled={isLoading}>
            {isLoading ? "جارٍ الإرسال..." : "إرسال رابط إعادة التعيين"}
          </ResetButton>
        </form>
      </ResetFormContainer>
    </ResetContainer>
  );
};

export default Response;
