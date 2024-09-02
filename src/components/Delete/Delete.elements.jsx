import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const Message = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

export const DeleteButton = styled.button`
  padding: 12px 24px;
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d9363e;
  }
`;

export const CancelButton = styled.button`
  padding: 12px 24px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a6268;
  }
`;
