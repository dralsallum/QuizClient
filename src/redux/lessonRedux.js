// features/lessons/lessonsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lessonsCompleted: {
    1: [true, false, false, false, false],
    2: [false, false, false, false, false],
  },
};

export const lessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {
    incrementLesson: (state, action) => {
      const chapterNumber = action.payload;
      let chapterLessons = state.lessonsCompleted[chapterNumber];
      if (!chapterLessons) {
        chapterLessons = [false, false, false, false, false];
      }

      const lessonIndex = chapterLessons.findIndex((completed) => !completed);
      if (lessonIndex !== -1) {
        chapterLessons[lessonIndex] = true;
      }

      state.lessonsCompleted[chapterNumber] = [...chapterLessons];
    },
  },
});

export const { incrementLesson } = lessonsSlice.actions;

export default lessonsSlice.reducer;
