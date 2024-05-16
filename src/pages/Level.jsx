import React, { useEffect } from "react";
import { FooterMe, Grade, NavAud, Sections, Vocabulary } from "../components";
import useRequireAuth from "../useRequireAuth";
const Level = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavAud />
      <Grade />
      <FooterMe />
    </>
  );
};

export default Level;
