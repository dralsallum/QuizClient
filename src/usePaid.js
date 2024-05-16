import React from "react";
import { Navigate, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.currentUser);
  const { vocabSet, storyUrl } = useParams();
  const location = useLocation();

  // Define free access vocabulary sets and story URLs
  const freeAccessVocabSets = ["set1", "story4"];
  const freeAccessStoryUrls = ["story4"]; // Include the stories that are free to access

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (
    location.pathname.startsWith("/vocabulary/") &&
    !user.isPaid &&
    !freeAccessVocabSets.includes(vocabSet)
  ) {
    return <Navigate to="/cashout" />;
  }

  if (
    location.pathname.startsWith("/meditation/listen/") &&
    !user.isPaid &&
    !freeAccessStoryUrls.includes(storyUrl)
  ) {
    return <Navigate to="/cashout" />;
  }

  return children;
};
