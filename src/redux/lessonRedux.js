// lessonRedux.js
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
      const chapterLessons = state.lessonsCompleted[chapterNumber] || [
        true,
        true,
        true,
        true,
        true,
      ];

      for (let i = 0; i < chapterLessons.length; i++) {
        if (!chapterLessons[i]) {
          chapterLessons[i] = true;
          break;
        }
      }

      state.lessonsCompleted[chapterNumber] = [...chapterLessons];
    },
  },
});

export const { incrementLesson } = lessonsSlice.actions;

export const selectLessonsCompleted = (state) => state.lessons.lessonsCompleted;

export default lessonsSlice.reducer;
