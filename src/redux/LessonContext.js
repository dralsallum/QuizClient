import React, { createContext, useContext, useState, useEffect } from "react";

const LessonContext = createContext();

export const useLesson = () => useContext(LessonContext);

export const LessonProvider = ({ children }) => {
  // Initialize state from localStorage if available
  const [lessonsCompleted, setLessonsCompleted] = useState(() => {
    const localData = localStorage.getItem("lessonsCompleted");
    return localData
      ? JSON.parse(localData)
      : {
          1: [true, false, false, false, false],
          2: [false, false, false, false, false],
        };
  });

  useEffect(() => {
    // Save to localStorage when lessonsCompleted changes
    localStorage.setItem("lessonsCompleted", JSON.stringify(lessonsCompleted));
  }, [lessonsCompleted]);

  const incrementLesson = (chapterNumber) => {
    let chapterLessons = lessonsCompleted[chapterNumber];
    if (!chapterLessons) {
      chapterLessons = [false, false, false, false, false];
    }

    for (let i = 0; i < chapterLessons.length; i++) {
      if (!chapterLessons[i]) {
        chapterLessons[i] = true;
        break;
      }
    }

    // Update state and localStorage
    setLessonsCompleted((prevLessonsCompleted) => {
      const updatedLessons = {
        ...prevLessonsCompleted,
        [chapterNumber]: [...chapterLessons],
      };
      localStorage.setItem("lessonsCompleted", JSON.stringify(updatedLessons));
      return updatedLessons;
    });
  };

  return (
    <LessonContext.Provider value={{ lessonsCompleted, incrementLesson }}>
      {children}
    </LessonContext.Provider>
  );
};
