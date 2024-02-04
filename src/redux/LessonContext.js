import React, { createContext, useContext, useState } from "react";

const LessonContext = createContext();

export const useLesson = () => {
  return useContext(LessonContext);
};

export const LessonProvider = ({ children }) => {
  const [lessonsCompleted, setLessonsCompleted] = useState({
    1: [true, true, true, true, true],
    2: [false, false, false, false, false],
  });

  const incrementLesson = (chapterNumber) => {
    const currentChapterLessons = lessonsCompleted[chapterNumber];
    const nextChapterNumber = chapterNumber + 1;

    // Update the current chapter lessons
    const updatedChapterLessons = currentChapterLessons.map((lesson, index) => {
      // Mark the first false lesson as true and leave the rest unchanged
      return index === currentChapterLessons.indexOf(false) ? true : lesson;
    });

    const newState = {
      ...lessonsCompleted,
      [chapterNumber]: updatedChapterLessons,
    };

    // Check if all lessons in the current chapter are completed after update
    const allLessonsCompleted = updatedChapterLessons.every((lesson) => lesson);

    if (allLessonsCompleted) {
      // Check if the next chapter exists, if not, initialize it
      if (!lessonsCompleted[nextChapterNumber]) {
        newState[nextChapterNumber] = [true, false, false, false, false]; // Open first lesson of the next chapter
      } else {
        // If next chapter exists but all lessons are not started or completed, mark the first lesson as true
        const nextChapterLessons = lessonsCompleted[nextChapterNumber];
        if (nextChapterLessons.every((lesson) => !lesson)) {
          newState[nextChapterNumber] = nextChapterLessons.map(
            (lesson, index) => (index === 0 ? true : lesson)
          );
        }
      }
    }

    // Finally, update the state with the new or modified chapters
    setLessonsCompleted(newState);
  };

  return (
    <LessonContext.Provider value={{ lessonsCompleted, incrementLesson }}>
      {children}
    </LessonContext.Provider>
  );
};
