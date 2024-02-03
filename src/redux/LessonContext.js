import React, { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../requestMethods";

const LessonContext = createContext();

export const useLesson = () => useContext(LessonContext);

export const LessonProvider = ({ children }) => {
  const [lessonsCompleted, setLessonsCompleted] = useState({});
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (currentUser) {
      fetchUserProgress(currentUser._id);
    }
  }, [currentUser]);

  const fetchUserProgress = async (userId) => {
    try {
      const res = await userRequest.get(`/lessons/user/${userId}`);
      setLessonsCompleted(res.data.lessonsCompleted);
    } catch (err) {
      console.error("Failed to fetch user progress:", err);
    }
  };

  const incrementLesson = async (chapterNumber) => {
    const chapterLessons =
      lessonsCompleted[chapterNumber] || Array(5).fill(false);
    const lessonToUpdate = chapterLessons.findIndex((completed) => !completed);

    if (lessonToUpdate !== -1) {
      chapterLessons[lessonToUpdate] = true;
      setLessonsCompleted({
        ...lessonsCompleted,
        [chapterNumber]: chapterLessons,
      });

      try {
        await userRequest.post("/lessons/complete", {
          userId: currentUser._id,
          chapterNumber,
          lessonNumber: lessonToUpdate,
        });
      } catch (error) {
        console.error("Error updating lesson completion status:", error);
      }
    }
  };

  return (
    <LessonContext.Provider value={{ lessonsCompleted, incrementLesson }}>
      {children}
    </LessonContext.Provider>
  );
};
