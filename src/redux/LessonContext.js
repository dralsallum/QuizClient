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
          1: [true, false, false, false, false],
          2: [false, false, false, false, false],
        };
  });

  // Effect to run when lessonsCompleted state changes
  useEffect(() => {
    // Save to localStorage
    localStorage.setItem("lessonsCompleted", JSON.stringify(lessonsCompleted));
  }, [lessonsCompleted]);

  const incrementLesson = (chapterNumber) => {
    const currentChapterLessons = lessonsCompleted[chapterNumber];
    const nextChapterNumber = chapterNumber + 1;

    const updatedChapterLessons = currentChapterLessons.map((lesson, index) => {
      return index === currentChapterLessons.indexOf(false) ? true : lesson;
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
        if (nextChapterLessons.every((lesson) => !lesson)) {
          newState[nextChapterNumber] = nextChapterLessons.map(
            (lesson, index) => (index === 0 ? true : lesson)
          );
        }
      }
    }

    setLessonsCompleted(newState);
  };

  return (
    <LessonContext.Provider value={{ lessonsCompleted, incrementLesson }}>
      {children}
    </LessonContext.Provider>
  );
};
