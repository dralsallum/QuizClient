import React, { createContext, useContext, useState } from "react";
import axios from "axios"; // Import axios

const LessonContext = createContext();

export const useLesson = () => {
  return useContext(LessonContext);
};

export const LessonProvider = ({ children }) => {
  const [lessonsCompleted, setLessonsCompleted] = useState({
    1: [true, false, false, false, false],
    2: [false, false, false, false, false],
  });

  const incrementLesson = (chapterNumber) => {
    let chapterLessons = lessonsCompleted[chapterNumber];
    if (!chapterLessons) {
      chapterLessons = [false, false, false, false, false];
    }

    for (let i = 0; i < chapterLessons.length; i++) {
      if (!chapterLessons[i]) {
        chapterLessons[i] = true;

        // Update lesson completion status on the backend
        updateLessonCompletion(chapterNumber, i);

        break;
      }
    }

    // Create a new object to force re-render
    setLessonsCompleted({
      ...lessonsCompleted,
      [chapterNumber]: [...chapterLessons],
    });
  };

  const updateLessonCompletion = async (chapterNumber, lessonNumber) => {
    try {
      // Send a POST request to update lesson completion status
      await axios.post("/api/users/complete", {
        userId: "sora", // Replace with the actual user ID
        chapterNumber,
        lessonNumber,
      });
    } catch (error) {
      console.error("Error updating lesson completion status:", error);
    }
  };

  return (
    <LessonContext.Provider value={{ lessonsCompleted, incrementLesson }}>
      {children}
    </LessonContext.Provider>
  );
};
