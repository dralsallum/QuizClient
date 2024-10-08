import React from "react";
import { Navigate, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

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

  if (
    location.pathname.startsWith("/vocabulary/") &&
    !user.isPaid &&
    !freeAccessVocabSets.includes(vocabSet)
  ) {
    return <Navigate to="/cashout" />;
  }

  if (
    location.pathname.startsWith("/audio/listen/") &&
    !user.isPaid &&
    !freeAccessStoryUrls.includes(storyUrl)
  ) {
    return <Navigate to="/cashout" />;
  }

  if (
    location.pathname.startsWith("/train/1/test/1/") &&
    !user.isPaid &&
    !freeAccessChapters.includes(chapterName)
  ) {
    return <Navigate to="/cashout" />;
  }

  return children;
};
