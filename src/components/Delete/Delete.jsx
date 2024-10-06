import React, { useState, useEffect } from "react";
import {
  Container,
  ContentWrapper,
  Heading,
  Message,
  Subtext,
  DeleteButton,
  CancelButton,
  ButtonGroup,
  ModalOverlay,
  ModalContent,
  ModalHeading,
  ModalMessage,
  ModalButton,
} from "./Delete.elements";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestMethods";
import NavAud from "../NavAud/NavAud";
import { FooterMe } from "..";

const Delete = () => {
  const [confirming, setConfirming] = useState(false);
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (!user) {
      setShowSignInPopup(true);
    }
  }, [user]);

  const handleDelete = async () => {
    try {
      await userRequest.delete(`/users/${user._id}`);
      navigate("/"); // Redirect to home or login page after deletion
    } catch (err) {
      console.error("Error deleting user:", err);
      // Handle the error as needed
    }
  };

  const handleSignIn = () => {
    setShowSignInPopup(false);
    navigate("/login"); // Adjust the route as needed
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

      {/* Modal Popup for Sign-In Prompt */}
      {showSignInPopup && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeading>Authentication Required</ModalHeading>
            <ModalMessage>
              You need to be signed in to delete your account. Please sign in
              first.
            </ModalMessage>
            <ModalButton onClick={handleSignIn}>Sign In</ModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Delete;
