import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lessonsCompleted: {
    1: [true, false, false, false, false],
    2: [false, false, false, false, false],
    // Add more chapters as needed
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
        // Mark the next incomplete lesson as complete
        chapterLessons[lessonIndex] = true;
      }

      // Check if all lessons in the chapter are completed
      const allLessonsCompleted = chapterLessons.every(
        (completed) => completed
      );

      if (allLessonsCompleted) {
        // Automatically unlock the first lesson of the next chapter
        const nextChapterNumber = chapterNumber + 1;
        if (!state.lessonsCompleted[nextChapterNumber]) {
          // Initialize next chapter if it doesn't exist
          state.lessonsCompleted[nextChapterNumber] = [
            false,
            false,
            false,
            false,
            false,
          ];
        }
        state.lessonsCompleted[nextChapterNumber][0] = true; // Unlock the first lesson of the next chapter
      }

      // Ensure the update is reflected in the state
      state.lessonsCompleted[chapterNumber] = [...chapterLessons];
    },
    resetLessons: (state) => {
      state.lessonsCompleted = initialState.lessonsCompleted;
    },
  },
});

export const { incrementLesson, resetLessons } = lessonsSlice.actions;

export default lessonsSlice.reducer;
