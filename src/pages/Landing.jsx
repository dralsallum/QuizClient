import React from "react";
import styled from "styled-components";
import {
  NavbarMe,
  Header,
  FooterMe,
  Article,
  Divider,
  Sections,
} from "../components";

const GradientWrapper = styled.div`
  background: linear-gradient(to top, #6e00f8, #563ce9, #116eee);
  padding-bottom: 1rem;
`;

const Landing = () => {
  return (
    <>
      <GradientWrapper>
        <NavbarMe />
        <Header />
      </GradientWrapper>
      <Sections />
      <Article />
      <Divider />
      <Article />
      <FooterMe />
    </>
  );
};

export default Landing;
