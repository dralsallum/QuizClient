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

      for (let i = 0; i < chapterLessons.length; i++) {
        if (!chapterLessons[i]) {
          chapterLessons[i] = true;
          break;
        }
      }

      state.lessonsCompleted[chapterNumber] = [...chapterLessons];
    },
    // Add more reducers here as needed
    resetLessons: (state) => {
      state.lessonsCompleted = initialState.lessonsCompleted;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementLesson, resetLessons } = lessonsSlice.actions;

// Selector to access the lessons state
export const selectLessons = (state) => state.lessons.lessonsCompleted;

export default lessonsSlice.reducer;
