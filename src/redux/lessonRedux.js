import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Assuming axios is used for HTTP requests

export const fetchLessonsCompleted = createAsyncThunk(
  "lessons/fetchLessonsCompleted",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/users/${userId}/lessonsCompleted`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateLessonsCompleted = createAsyncThunk(
  "lessons/updateLessonsCompleted",
  async ({ userId, chapter, lessonsCompleted }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/${userId}/lessonsCompleted`,
        { chapter, lessonsCompleted }
      );
      return response.data.lessonsCompleted;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  data: {},
  loading: false,
  error: null,
};

export const lessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLessonsCompleted.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchLessonsCompleted.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchLessonsCompleted.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updateLessonsCompleted.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [updateLessonsCompleted.fulfilled]: (state, action) => {
      state.data = { ...state.data, ...action.payload }; // Assuming payload returns the updated lessonsCompleted map
      state.loading = false;
    },
    [updateLessonsCompleted.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { completeLesson, incrementLesson } = lessonsSlice.actions;
export default lessonsSlice.reducer;
