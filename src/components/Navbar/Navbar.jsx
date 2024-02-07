import React from "react";
import { NavbarContainer, NavbarContainerImg } from "./Navbar.elements";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
      <NavbarContainer>
        <NavbarContainerImg
          src={"https://alsallum.s3.eu-north-1.amazonaws.com/12english.png"}
        />
      </NavbarContainer>
    </Link>
  );
};

export default Navbar;
