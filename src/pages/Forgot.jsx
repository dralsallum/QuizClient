import React, { useEffect } from "react";
import { NavAud, FooterMe, ForgotPassword } from "../components";

const Forgot = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavAud />
      <ForgotPassword />
      <FooterMe />
    </>
  );
};

export default Forgot;
