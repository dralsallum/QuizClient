import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lessonsCompleted: {
    // Initial state with example chapters and lesson completion statuses
    1: [true, false, false, false, false],
    2: [false, false, false, false, false],
    // Add more chapters as needed
  },
};

export const lessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {
    completeLesson: (state, action) => {
      const { chapter, lessonIndex } = action.payload;
      if (!state.lessonsCompleted[chapter]) {
        state.lessonsCompleted[chapter] = [];
      }
      state.lessonsCompleted[chapter][lessonIndex] = true;
    },
    incrementLesson: (state, action) => {
      const { chapter } = action.payload;
      const lessons = state.lessonsCompleted[chapter] || [];

      // Find the first incomplete lesson and mark it as complete
      const firstIncompleteIndex = lessons.findIndex((completed) => !completed);
      if (firstIncompleteIndex !== -1) {
        lessons[firstIncompleteIndex] = true;
      }

      // Update the state
      state.lessonsCompleted[chapter] = lessons;
    },
    // Add more reducers as needed for different actions
  },
});

// Export actions and reducer
export const { completeLesson, incrementLesson } = lessonsSlice.actions;
export default lessonsSlice.reducer;
