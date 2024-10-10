import React, { useEffect } from "react";
import { FooterMe, NavTech, Privacies } from "../components";

const Condition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavTech />
      <Privacies />
      <FooterMe />
    </>
  );
};

export default Condition;
