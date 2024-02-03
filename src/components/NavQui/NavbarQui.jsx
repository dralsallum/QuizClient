import React from "react";
import { NavbarContainer, NavbarContainerImg } from "./NavbarQui.elements";

import { Link } from "react-router-dom";

const NavbarQui = () => {
  return (
    <NavbarContainer>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <NavbarContainerImg
          src={
            "https://alsallum.s3.eu-north-1.amazonaws.com/12english-logo.png"
          }
        />
      </Link>
    </NavbarContainer>
  );
};

export default NavbarQui;
