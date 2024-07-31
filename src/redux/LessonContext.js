import React, { createContext, useContext, useState, useEffect } from "react";

const LessonContext = createContext();

export const useLesson = () => {
  return useContext(LessonContext);
};

export const LessonProvider = ({ children }) => {
  const [lessonsCompleted, setLessonsCompleted] = useState(() => {
    const savedProgress = localStorage.getItem("lessonsCompleted");
    return savedProgress
      ? JSON.parse(savedProgress)
      : {
          1: [true, false, false, false, false],
          2: [false, false, false, false, false],
          3: [false, false, false, false, false],
          4: [false, false, false, false, false],
        };
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    localStorage.setItem("lessonsCompleted", JSON.stringify(lessonsCompleted));
  }, [lessonsCompleted]);

  const incrementLesson = (chapterNumber) => {
    const currentChapterLessons = lessonsCompleted[chapterNumber];
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
      const nextChapterNumber = chapterNumber + 1;
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
    return allLessonsCompleted ? chapterNumber + 1 : chapterNumber;
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

export default LessonProvider;
