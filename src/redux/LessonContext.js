import React, { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../requestMethods"; // Adjust the path as needed

const LessonContext = createContext();

export const useLesson = () => {
  return useContext(LessonContext);
};

export const LessonProvider = ({ children }) => {
  const [lessonsCompleted, setLessonsCompleted] = useState({
    1: [true, false, false, false, false],
    2: [false, false, false, false, false],
  });

  // Use useSelector to get the current user from Redux store
  const currentUser = useSelector((state) => state.user.currentUser);

  const incrementLesson = async (chapterNumber) => {
    let chapterLessons = lessonsCompleted[chapterNumber];
    let lessonToUpdate = 0;
    if (!chapterLessons) {
      chapterLessons = [false, false, false, false, false];
    }

    for (let i = 0; i < chapterLessons.length; i++) {
      if (!chapterLessons[i]) {
        chapterLessons[i] = true;
        lessonToUpdate = i;
        break;
      }
    }

    setLessonsCompleted({
      ...lessonsCompleted,
      [chapterNumber]: [...chapterLessons],
    });

    // Use the ID from currentUser
    const userId = currentUser?.id; // Make sure this matches the property name in your user object

    try {
      await userRequest.post("/lessons/complete", {
        userId,
        chapterNumber,
        lessonNumber: lessonToUpdate,
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
