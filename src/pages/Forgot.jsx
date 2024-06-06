import React, { useEffect } from "react";
import { NavAud, FooterMe, Reset } from "../components";

const Forgot = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavAud />
      <Reset />
      <FooterMe />
    </>
  );
};

export default Forgot;
