import React, { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";

const LessonContext = createContext();

export const useLesson = () => {
  return useContext(LessonContext);
};

export const LessonProvider = ({ children }) => {
  const [lessonsCompleted, setLessonsCompleted] = useState({
    1: [true, true, false, false, false],
    2: [false, false, false, false, false],
  });

  const incrementLesson = (chapterNumber) => {
    let chapterLessons = lessonsCompleted[chapterNumber];
    if (!chapterLessons) {
      // Initialize
      chapterLessons = [false, false, false, false, false];
    }

    for (let i = 0; i < chapterLessons.length; i++) {
      if (!chapterLessons[i]) {
        chapterLessons[i] = true;
        break;
      }
    }

    // Create a new object to force re-render
    setLessonsCompleted({
      ...lessonsCompleted,
      [chapterNumber]: [...chapterLessons],
    });
  };

  return (
    <LessonContext.Provider value={{ lessonsCompleted, incrementLesson }}>
      {children}
    </LessonContext.Provider>
  );
};
