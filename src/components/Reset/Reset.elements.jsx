import styled from "styled-components";

export const ResetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const ResetFormContainer = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export const ResetHeader = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const ResetSubHeader = styled.h2`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const ResetInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  &:focus {
    border-color: #56c1ff;
    outline: none;
  }
`;

export const ResetButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #56c1ff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #007bff;
  }
  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

export const ErrorContainer = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

export const SuccessContainer = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  border: 1px solid #c3e6cb;
  border-radius: 5px;
  margin-bottom: 1rem;
`;
