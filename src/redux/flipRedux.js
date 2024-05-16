import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flips: {}, // This will hold the flip state for each card
};

const flipSlice = createSlice({
  name: "flip",
  initialState,
  reducers: {
    toggleFlip: (state, action) => {
      const { cardId } = action.payload;
      state.flips[cardId] = !state.flips[cardId];
    },
    resetFlip: (state, action) => {
      const { cardId } = action.payload;
      state.flips[cardId] = false;
    },
    resetAllFlips: (state) => {
      Object.keys(state.flips).forEach((key) => {
        state.flips[key] = false;
      });
    },
  },
});

export const { toggleFlip, resetFlip, resetAllFlips } = flipSlice.actions;
export default flipSlice.reducer;
