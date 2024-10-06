import React, { useState } from "react";
import {
  Container,
  ContentWrapper,
  Heading,
  Message,
  Subtext,
  DeleteButton,
  CancelButton,
  ButtonGroup,
} from "./Delete.elements";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestMethods";
import NavAud from "../NavAud/NavAud";
import { FooterMe } from "..";

const Delete = () => {
  const [confirming, setConfirming] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);

  const handleDelete = async () => {
    try {
      await userRequest.delete(`/users/${user._id}`);
      navigate("/"); // Redirect to home or login page after deletion
    } catch (err) {
      console.error("Error deleting user:", err);
      // Handle the error as needed
    }
  };

  return (
    <>
      <NavAud />
      <Container>
        <ContentWrapper>
          <Heading>Delete Account</Heading>
          {confirming ? (
            <>
              <Message>Are you sure you want to delete your account?</Message>
              <ButtonGroup>
                <DeleteButton onClick={handleDelete}>Yes, Delete</DeleteButton>
                <CancelButton onClick={() => setConfirming(false)}>
                  Cancel
                </CancelButton>
              </ButtonGroup>
            </>
          ) : (
            <>
              <Message>This action cannot be undone.</Message>
              <DeleteButton onClick={() => setConfirming(true)}>
                Delete Account
              </DeleteButton>
            </>
          )}
          <Subtext>
            If you delete your account, all your data will be permanently
            removed.
          </Subtext>
        </ContentWrapper>
      </Container>
      <FooterMe />
    </>
  );
};

export default Delete;
