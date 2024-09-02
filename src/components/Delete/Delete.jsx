import React, { useState } from "react";
import {
  Container,
  DeleteButton,
  CancelButton,
  ButtonGroup,
  Message,
} from "./Delete.elements";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestMethods"; // Import the userRequest instance

const Delete = () => {
  const [confirming, setConfirming] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);

  const handleDelete = async () => {
    try {
      await userRequest.delete(`/users/${user._id}`); // Use userRequest for deletion
      // Add any additional logic here after successful deletion
      navigate("/"); // Redirect to home or login page after deletion
    } catch (err) {
      console.error("Error deleting user:", err);
      // Handle the error as needed
    }
  };

  return (
    <Container>
      {confirming ? (
        <>
          <Message>Are you sure you want to delete your profile?</Message>
          <ButtonGroup>
            <DeleteButton onClick={handleDelete}>Yes, Delete</DeleteButton>
            <CancelButton onClick={() => setConfirming(false)}>
              Cancel
            </CancelButton>
          </ButtonGroup>
        </>
      ) : (
        <DeleteButton onClick={() => setConfirming(true)}>
          Delete Profile
        </DeleteButton>
      )}
    </Container>
  );
};

export default Delete;
