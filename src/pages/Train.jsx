import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavTech, QueFooter, Question, Store } from "../components";

const Train = () => {
  const { questionId } = useParams(); // Get the questionId from the URL
  const [showComponent, setShowComponent] = useState("question");

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
      {showComponent === "question" && <Question questionId={questionId} />}
      {showComponent === "store" && <Store />}
      <QueFooter
        showQuestion={() => setShowComponent("question")}
        showStore={() => setShowComponent("store")}
        currentComponent={showComponent}
      />
    </>
  );
};

export default Train;
