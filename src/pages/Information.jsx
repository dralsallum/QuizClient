import React, { useEffect } from "react";
import { FooterMe, NavAud, Who } from "../components";

const Information = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavAud />
      <Who />
      <FooterMe />
    </>
  );
};

export default Information;
