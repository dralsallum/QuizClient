import React, { createContext, useContext, useState, useEffect } from "react";

const TeachContext = createContext();

export const useTeach = () => {
  return useContext(TeachContext);
};

export const TeachProvider = ({ children }) => {
  const [teachCompleted, setTeachCompleted] = useState(() => {
    const savedProgress = localStorage.getItem("teachCompleted");
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
    localStorage.setItem("teachCompleted", JSON.stringify(teachCompleted));
  }, [teachCompleted]);

  const increaseTeach = (chapterNumber) => {
    const currentChapterTeach = teachCompleted[chapterNumber];
    const firstIncompleteTeachIndex = currentChapterTeach.indexOf(false);
    const updatedChapterTeach = currentChapterTeach.map((teach, index) => {
      return index === firstIncompleteTeachIndex ? true : teach;
    });

    const newState = {
      ...teachCompleted,
      [chapterNumber]: updatedChapterTeach,
    };

    const allTeachCompleted = updatedChapterTeach.every((teach) => teach);

    if (allTeachCompleted) {
      const nextChapterNumber = chapterNumber + 1;
      if (!teachCompleted[nextChapterNumber]) {
        newState[nextChapterNumber] = [true, false, false, false, false];
      } else {
        const nextChapterTeach = teachCompleted[nextChapterNumber];
        const firstIncompleteTeachIndex = nextChapterTeach.indexOf(false);
        if (firstIncompleteTeachIndex !== -1) {
          newState[nextChapterNumber] = nextChapterTeach.map((teach, index) =>
            index === firstIncompleteTeachIndex ? true : teach
          );
        }
      }
    }

    setTeachCompleted(newState);
    return allTeachCompleted ? chapterNumber + 1 : chapterNumber;
  };

  return (
    <TeachContext.Provider
      value={{
        teachCompleted,
        increaseTeach,
        currentQuestion,
        setCurrentQuestion,
      }}
    >
      {children}
    </TeachContext.Provider>
  );
};

export default TeachProvider;
