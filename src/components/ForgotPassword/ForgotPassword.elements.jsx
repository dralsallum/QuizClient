import styled from "styled-components";

export const ForgotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ForgotFormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ForgotHeader = styled.h1`
  margin-bottom: 1rem;
`;

export const ForgotSubHeader = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #666;
`;

export const ForgotInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ForgotButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background: #ccc;
  }
`;

export const ErrorContainer = styled.div`
  color: red;
  margin-bottom: 1rem;
`;

export const SuccessContainer = styled.div`
  color: green;
  margin-bottom: 1rem;
`;
