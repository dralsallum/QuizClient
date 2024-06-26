import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavbarContainerImg,
  NavMenu,
  NavBtnLink,
  ButtonMain,
} from "./Navbar.elements";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../redux/userRedux";
import axios from "axios";

const NavbarMe = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser); // Use the user object from Redux store

  const handleSignOut = async () => {
    try {
      await axios.post("/api/auth/signout");

      dispatch(signOut());
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <NavbarContainerImg
              src={"https://alsallum.s3.eu-north-1.amazonaws.com/fox-white.png"}
            />
          </Link>
        </NavLogo>
        <NavMenu>
          {user ? (
            <ButtonMain primary onClick={handleSignOut}>
              تسجيل خروج
            </ButtonMain>
          ) : (
            <NavBtnLink to="/login">
              <ButtonMain primary>تسجيل دخول</ButtonMain>
            </NavBtnLink>
          )}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default NavbarMe;
