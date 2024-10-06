import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
  background-color: #f0f2f5;
  padding: 20px; /* Added padding for small screens */
`;

export const ContentWrapper = styled.div`
  background-color: #fff;
  padding: 40px 60px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px; /* Limit the maximum width */

  @media (max-width: 768px) {
    padding: 30px 40px;
    max-width: 90%; /* Adjust width for tablets */
  }

  @media (max-width: 480px) {
    padding: 20px 20px;
    max-width: 100%; /* Full width on mobile */
    box-shadow: none; /* Simplify styling on small screens */
  }
`;

export const Heading = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Message = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #555;

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const Subtext = styled.p`
  font-size: 14px;
  margin-top: 40px;
  color: #888;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-top: 20px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap; /* Allow buttons to wrap on small screens */

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const DeleteButton = styled.button`
  padding: 12px 30px;
  background-color: #ff4d4f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  flex: 1; /* Allow button to expand */

  &:hover {
    background-color: #d9363e;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const CancelButton = styled.button`
  padding: 12px 30px;
  background-color: #6c757d;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  flex: 1; /* Allow button to expand */

  &:hover {
    background-color: #5a6268;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Modal Content
export const ModalContent = styled.div`
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 20px 20px;
    max-width: 90%;
  }
`;

// Modal Heading
export const ModalHeading = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

// Modal Message
export const ModalMessage = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  color: #555;

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

// Modal Button
export const ModalButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;
