// src/components/ProtectedRoute.js
import React from "react";
import { Navigate, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import GoogleAd from "../src/components/Google/Google"; // Import the GoogleAd component

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

  // Determine if the current route requires payment
  const isProtectedRoute =
    (location.pathname.startsWith("/vocabulary/") &&
      !user.isPaid &&
      !freeAccessVocabSets.includes(vocabSet)) ||
    (location.pathname.startsWith("/audio/listen/") &&
      !user.isPaid &&
      !freeAccessStoryUrls.includes(storyUrl)) ||
    (location.pathname.startsWith("/test/") &&
      !user.isPaid &&
      !freeAccessChapters.includes(chapterName));

  if (isProtectedRoute) {
    // Instead of navigating to /cashout, display Google Ads
    return <GoogleAd />;
  }

  return children;
};
