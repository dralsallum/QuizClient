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
} from "./Reset.elements";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { token } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`/api/auth/reset-password/${token}`, {
        password,
      });
      setMessage(response.data);
    } catch (error) {
      setMessage(error.response.data || "Password reset failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ResetContainer>
      <ResetFormContainer>
        <ResetHeader>اعادة تعيين كلمة المرور</ResetHeader>
        {message &&
          (message.includes("successful") ? (
            <SuccessContainer>{message}</SuccessContainer>
          ) : (
            <ErrorContainer>{message}</ErrorContainer>
          ))}
        <form onSubmit={handleSubmit}>
          <ResetSubHeader>كلمة مرور جديدة</ResetSubHeader>
          <ResetInput
            type="password"
            name="password"
            placeholder="كلمة مرور جديدة"
            onChange={handleChange}
          />
          <ResetSubHeader>تاكيد كلمة المرور</ResetSubHeader>
          <ResetInput
            type="password"
            name="confirmPassword"
            placeholder="تاكيد كلمة المرور"
            onChange={handleChange}
          />
          <ResetButton disabled={isLoading}>
            {isLoading ? "Resetting..." : "Reset Password"}
          </ResetButton>
        </form>
      </ResetFormContainer>
    </ResetContainer>
  );
};

export default ResetPassword;
