import React, { useEffect } from "react";
import { FooterMe, NavTech, Term } from "../components";

const Condition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavTech />
      <Term />
      <FooterMe />
    </>
  );
};

export default Condition;
