import React from "react";
import { FooterMe, Article, Divider, Open, NavVoc, Phone } from "../components";

const Landing = () => {
  return (
    <>
      <NavVoc />
      <Open />
      <Phone />
      <Article />
      <Divider />
      <Article />
      <FooterMe />
    </>
  );
};

export default Landing;
