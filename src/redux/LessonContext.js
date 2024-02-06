import React, { createContext, useContext, useState } from "react";

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
    const currentChapterLessons = lessonsCompleted[chapterNumber];
    const nextChapterNumber = chapterNumber + 1;

    // Update the current chapter lessons
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
