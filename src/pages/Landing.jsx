import React, { useEffect } from "react";
import styled from "styled-components";
import { NavbarMe, Header, FooterMe, Article, Divider } from "../components";

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
      <Article />
      <Divider />
      <Article />
      <FooterMe />
    </>
  );
};

export default Landing;
