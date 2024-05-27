import React, { createContext, useContext, useState, useEffect } from "react";

const LessonContext = createContext();

export const useLesson = () => {
  return useContext(LessonContext);
};

export const LessonProvider = ({ children }) => {
  // Initialize state with localStorage value or default
  const [lessonsCompleted, setLessonsCompleted] = useState(() => {
    const localData = localStorage.getItem("lessonsCompleted");
    return localData
      ? JSON.parse(localData)
      : {
          1: [true, true, true, true, false],
          2: [false, false, false, false, false],
          3: [false, false, false, false, false],
          4: [false, false, false, false, false],
        };
  });

  const [currentQuestion, setCurrentQuestion] = useState(() => {
    const savedCurrentQuestion = localStorage.getItem("currentQuestion");
    return savedCurrentQuestion ? JSON.parse(savedCurrentQuestion) : 0;
  });

  useEffect(() => {
    localStorage.setItem("currentQuestion", JSON.stringify(currentQuestion));
  }, [currentQuestion]);

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem("lessonsCompleted", JSON.stringify(lessonsCompleted));
  }, [lessonsCompleted]);

  const incrementLesson = (chapterNumber) => {
    const currentChapterLessons = lessonsCompleted[chapterNumber];
    const nextChapterNumber = chapterNumber + 1;

    const firstIncompleteLessonIndex = currentChapterLessons.indexOf(false);
    const updatedChapterLessons = currentChapterLessons.map((lesson, index) => {
      return index === firstIncompleteLessonIndex ? true : lesson;
    });

    const newState = {
      ...lessonsCompleted,
      [chapterNumber]: updatedChapterLessons,
    };

    const allLessonsCompleted = updatedChapterLessons.every((lesson) => lesson);

    if (allLessonsCompleted) {
      if (!lessonsCompleted[nextChapterNumber]) {
        newState[nextChapterNumber] = [true, false, false, false, false];
      } else {
        const nextChapterLessons = lessonsCompleted[nextChapterNumber];
        const firstIncompleteLessonIndex = nextChapterLessons.indexOf(false);
        if (firstIncompleteLessonIndex !== -1) {
          newState[nextChapterNumber] = nextChapterLessons.map(
            (lesson, index) =>
              index === firstIncompleteLessonIndex ? true : lesson
          );
        }
      }
    }

    setLessonsCompleted(newState);
  };

  return (
    <LessonContext.Provider
      value={{
        lessonsCompleted,
        incrementLesson,
        currentQuestion,
        setCurrentQuestion,
      }}
    >
      {children}
    </LessonContext.Provider>
  );
};
