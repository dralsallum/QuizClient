import React, { useEffect } from "react";
import { NavAud, FooterMe, Store } from "../components";

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavAud />
      <Store />
      <FooterMe />
    </>
  );
};

export default Shop;
