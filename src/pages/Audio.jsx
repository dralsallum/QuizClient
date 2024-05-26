import React, { useEffect, useState } from "react";
import { Meditation, NavTech, QueFooter, Store } from "../components";
import useRequireAuth from "../useRequireAuth";

const Audio = () => {
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
      {showComponent === "question" && <Meditation />}
      {showComponent === "store" && <Store />}
      <QueFooter
        showQuestion={() => setShowComponent("question")}
        showStore={() => setShowComponent("store")}
        currentComponent={showComponent}
      />
    </>
  );
};

export default Audio;
