// src/components/ProtectedRoute.js
import React from "react";
import { Navigate, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import GoogleAd from "./components/Google/GoogleAd"; // Import the GoogleAd component

export const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.currentUser);
  const { vocabSet, storyUrl, chapterName } = useParams();
  const location = useLocation();

  const freeAccessVocabSets = ["set1"];
  const freeAccessStoryUrls = ["story4"];
  const freeAccessChapters = ["chapter1"];

  if (!user) {
    return <Navigate to="/signup" />;
  }

  // Function to check access based on the current path
  const checkAccess = () => {
    if (location.pathname.startsWith("/vocabulary/")) {
      return user.isPaid || freeAccessVocabSets.includes(vocabSet);
    }

    if (location.pathname.startsWith("/audio/listen/")) {
      return user.isPaid || freeAccessStoryUrls.includes(storyUrl);
    }

    if (location.pathname.startsWith("/test/")) {
      return user.isPaid || freeAccessChapters.includes(chapterName);
    }

    // If none of the above, allow access
    return true;
  };

  const hasAccess = checkAccess();

  if (!hasAccess) {
    return <GoogleAd />; // Display Google Ads instead of redirecting
  }

  return children;
};
