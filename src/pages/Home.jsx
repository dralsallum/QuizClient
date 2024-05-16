import React, { useEffect } from "react";
import { Body, NavAud, FooterMe } from "../components";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavAud />
      <Body />
      <FooterMe />
    </>
  );
};

export default Home;
