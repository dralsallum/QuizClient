// src/components/ProtectedRoute.js
import React, { useState } from "react";
import { Navigate, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import GoogleAd from "./components/Google/GoogleAd"; // Ensure correct path
import { hasAccess } from "../utils/accessControl"; // Ensure correct path

export const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.currentUser);
  const location = useLocation();
  const { vocabSet, storyUrl, chapterName } = useParams();

  // Determine the base route
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const baseRoute = pathSegments.length > 0 ? `/${pathSegments[0]}/` : "/";

  // Extract the parameter based on the base route
  let param = "";
  if (baseRoute === "/vocabulary/") {
    param = vocabSet;
  } else if (baseRoute === "/audio/listen/") {
    param = storyUrl;
  } else if (baseRoute === "/test/") {
    param = chapterName;
  }

  // Determine access
  const accessResult = hasAccess(user, baseRoute, param);

  // State to track if ad has been skipped
  const [adSkipped, setAdSkipped] = useState(false);

  if (!accessResult.access) {
    if (accessResult.redirect === "/signup") {
      return <Navigate to="/signup" />;
    } else if (accessResult.redirect === "/checkout" && !adSkipped) {
      // Render the GoogleAd component and pass the onSkip callback
      return <GoogleAd onSkip={() => setAdSkipped(true)} />;
    }
  }

  // If access is granted or ad has been skipped, render the children
  return children;
};
