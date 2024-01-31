import React, { createContext, useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import chapterItems from "./chapterItems";

const LessonContext = createContext();

export const useLesson = () => {
  return useContext(LessonContext);
};

const generateInitialState = (items) => {
  const initialState = {};
  items.forEach((item) => {
    if (!initialState[item.chapterId]) {
      initialState[item.chapterId] = [];
    }
    initialState[item.chapterId][item.lessonId - 1] = item.completed;
  });
  return initialState;
};

export const LessonProvider = ({ children }) => {
  const [lessonsCompleted, setLessonsCompleted] = useState(
    generateInitialState(chapterItems)
  );

  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const fetchLessonProgress = async () => {
      if (!user || !user._id) {
        console.log("No user ID found for fetching lessons.");
        return;
      }

      try {
        const response = await axios.get(`/api/lessons/${user._id}`);
        setLessonsCompleted(
          response.data.progress || generateInitialState(chapterItems)
        );
      } catch (err) {
        console.error("Error fetching lessons", err);
        setLessonsCompleted(generateInitialState(chapterItems));
      }
    };

    fetchLessonProgress();
  }, [user]);

  const saveProgressToBackend = (data) => {
    if (!user || !user._id) return;

    axios
      .post(`/api/lessons/${user._id}`, { progress: data })
      .then((response) => {
        console.log("Lesson progress saved", response.data);
      })
      .catch((err) => console.error("Error saving lesson progress", err));
  };

  const incrementLesson = () => {
    const firstIncompleteLesson = chapterItems.find(
      (item) => !lessonsCompleted[item.chapterId]?.[item.lessonId - 1]
    );

    if (firstIncompleteLesson) {
      const { chapterId, lessonId } = firstIncompleteLesson;
      const updatedProgress = { ...lessonsCompleted };
      if (!updatedProgress[chapterId]) {
        updatedProgress[chapterId] = [];
      }
      updatedProgress[chapterId][lessonId - 1] = true;
      setLessonsCompleted(updatedProgress);
      saveProgressToBackend(updatedProgress);
    }
  };

  return (
    <LessonContext.Provider
      value={{ lessonsCompleted, setLessonsCompleted, incrementLesson }}
    >
      {children}
    </LessonContext.Provider>
  );
};

export default LessonProvider;
