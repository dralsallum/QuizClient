import React, { useEffect } from "react";
import { NavAud, FooterMe, Response } from "../components";

const Forgot = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavAud />
      <Response />
      <FooterMe />
    </>
  );
};

export default Forgot;
