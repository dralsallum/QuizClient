import React from "react";
import styled from "styled-components";
import {
  NavbarMe,
  Header,
  FooterMe,
  Article,
  Divider,
  Sections,
  Open,
  NavVoc,
} from "../components";

const Landing = () => {
  return (
    <>
      <NavVoc />
      <Open />
      <Sections />
      <Article />
      <Divider />
      <Article />
      <FooterMe />
    </>
  );
};

export default Landing;
