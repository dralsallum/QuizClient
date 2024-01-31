import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk example (adjust according to your API)
export const fetchLessons = createAsyncThunk(
  "lessons/fetchLessons",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/lessons/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching lessons:", error);
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error fetching lessons"
      );
    }
  }
);

const initialState = {
  lessonsCompleted: { 1: [true] },
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const lessonSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {
    // Define your reducers here
    setLessons: (state, action) => {
      state.lessonsCompleted = action.payload;
    },

    incrementLesson: (state, action) => {
      const { chapterId, lessonId } = action.payload;

      // Initialize the chapter if it doesn't exist
      if (!state.lessonsCompleted[chapterId]) {
        state.lessonsCompleted[chapterId] = [];
      }

      // Calculate the index for the lesson
      const lessonIndex = lessonId - 1;

      // Fill the array up to the required index if necessary
      while (state.lessonsCompleted[chapterId].length <= lessonIndex) {
        state.lessonsCompleted[chapterId].push(false);
      }

      // Set the lesson as completed
      state.lessonsCompleted[chapterId][lessonIndex] = true;
    },
  },

  extraReducers: {
    // Handle async thunks
    [fetchLessons.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchLessons.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.lessonsCompleted = action.payload;
    },
    [fetchLessons.rejected]: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export const { setLessons, incrementLesson } = lessonSlice.actions;

export default lessonSlice.reducer;
