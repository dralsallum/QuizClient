import React, { useEffect } from "react";
import { FooterMe, NavTech, Reach } from "../components";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavTech />
      <Reach />
      <FooterMe />
    </>
  );
};

export default Contact;
