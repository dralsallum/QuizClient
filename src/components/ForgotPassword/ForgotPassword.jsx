import React, { useState } from "react";
import axios from "axios";
import {
  ForgotContainer,
  ForgotFormContainer,
  ForgotHeader,
  ForgotSubHeader,
  ForgotInput,
  ForgotButton,
  ErrorContainer,
  SuccessContainer,
} from "./ForgotPassword.elements";

const ForgotPassword = () => {
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
      const response = await axios.post(
        "https://quizeng-022517ad949b.herokuapp.com/api/auth/forgot-password",
        { email }
      );
      setMessage(response.data.message); // Assume backend sends a success message
    } catch (error) {
      // Use the error message from the backend or a default message
      setMessage(
        error.response?.data?.message || "Password reset request failed."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ForgotContainer>
      <ForgotFormContainer>
        <ForgotHeader>Forgot Password</ForgotHeader>
        {message &&
          (message.includes("successful") ? (
            <SuccessContainer>{message}</SuccessContainer>
          ) : (
            <ErrorContainer>{message}</ErrorContainer>
          ))}
        <form onSubmit={handleSubmit}>
          <ForgotSubHeader>Email Address</ForgotSubHeader>
          <ForgotInput
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
            required
          />
          <ForgotButton disabled={isLoading}>
            {isLoading ? "Requesting..." : "Request Password Reset"}
          </ForgotButton>
        </form>
      </ForgotFormContainer>
    </ForgotContainer>
  );
};

export default ForgotPassword;
