import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavTech, QueFooter, Store, Knowledge, FooterMe } from "../components";

const Train = () => {
  const { knowledgeId } = useParams();
  const [showComponent, setShowComponent] = useState("knowledge");

  useEffect(() => {
    const viewport = document.querySelector("meta[name=viewport]");
    if (viewport) {
      viewport.parentNode.removeChild(viewport);

      const newViewport = document.createElement("meta");
      newViewport.name = "viewport";
      newViewport.content =
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
      document.getElementsByTagName("head")[0].appendChild(newViewport);
    }
  }, []);

  return (
    <>
      <NavTech />
      {showComponent === "knowledge" && <Knowledge knowledgeId={knowledgeId} />}
      <FooterMe />
    </>
  );
};

export default Train;
