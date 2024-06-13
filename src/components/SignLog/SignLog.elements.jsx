import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #0000ed;
  font-size: 11px;

  &:hover {
    text-decoration: none;
  }
`;

export const Loader = styled.div`
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const SignContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  direction: rtl;
  margin-top: 2rem;
`;

export const LoginContainer = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;
`;

export const LoginSignHeader = styled.h1`
  font-weight: 500;
  margin-bottom: 20px;
`;

export const LoginSignSubHeader = styled.h5`
  margin-bottom: 5px;
`;

export const LoginSignInput = styled.input`
  height: 30px;
  margin-bottom: 10px;
  background-color: white;
  width: 98%;
  border-radius: 2px;
  font-size: 16px;
`;
export const ErrorCon = styled.div`
  color: red;
`;

export const LoginSignPara = styled.p`
  margin-top: 15px;
  font-size: 12px;
`;
export const LoginSignEx = styled.p`
  font-size: 12px;
  color: #757575;
`;

export const SignButton = styled.button`
  background-color: #2946b6;
  border-radius: 4px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #1a2d8a;
  color: white;
  font-size: 16px;

  :hover {
    cursor: pointer;
  }
`;

export const RegistarButton = styled.button`
  border-radius: 4px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: darkgray;
  cursor: pointer;
  font-size: 16px;

  :hover {
    cursor: pointer;
  }
`;

export const SignUpForm = styled.form``;
