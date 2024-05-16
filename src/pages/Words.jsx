import React from "react";
import { FooterMe, NavAud, Sections, Vocabulary } from "../components";
import useRequireAuth from "../useRequireAuth";

const Words = () => {
  return (
    <>
      <NavAud />
      <Vocabulary />
      <FooterMe />
    </>
  );
};

export default Words;
