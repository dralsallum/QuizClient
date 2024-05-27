import { createSlice } from "@reduxjs/toolkit";

const initializeLessons = () => {
  return {
    1: [true, true, true, true, true],
    2: [true, false, false, false, false],
    3: [false, false, false, false, false],
    4: [false, false, false, false, false],
    5: [false, false, false, false, false],
    6: [false, false, false, false, false],
    7: [false, false, false, false, false],
    8: [false, false, false, false, false],
    9: [false, false, false, false, false],
  };
};

const initializeNextChapter = (nextChapterLessons) => {
  if (!nextChapterLessons) {
    return [true, false, false, false, false];
  }

  if (nextChapterLessons.every((lesson) => !lesson)) {
    return nextChapterLessons.map((lesson, index) =>
      index === 0 ? true : lesson
    );
  }

  return nextChapterLessons;
};

const initialState = {
  lessonsCompleted: initializeLessons(),
  currentQuestion: 0,
};

export const lessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {
    incrementLesson: (state, action) => {
      const chapterNumber = action.payload;
      const currentChapterLessons = state.lessonsCompleted[chapterNumber] || [];
      const nextChapterNumber = chapterNumber + 1;
      const lessonIndex = currentChapterLessons.indexOf(false);

      if (lessonIndex !== -1) {
        const updatedChapterLessons = currentChapterLessons.map(
          (lesson, index) => (index === lessonIndex ? true : lesson)
        );

        state.lessonsCompleted[chapterNumber] = updatedChapterLessons;

        if (updatedChapterLessons.every((lesson) => lesson)) {
          state.lessonsCompleted[nextChapterNumber] = initializeNextChapter(
            state.lessonsCompleted[nextChapterNumber]
          );
        }
      }
    },
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
  },
});

export const { incrementLesson, setCurrentQuestion } = lessonsSlice.actions;

export default lessonsSlice.reducer;
