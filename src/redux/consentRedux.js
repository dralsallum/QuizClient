// src/redux/consentRedux.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  consent: false, // Indicates if the user has given consent
  optOut: false, // Indicates if the user has opted out of selling data
};

const consentSlice = createSlice({
  name: "consent",
  initialState,
  reducers: {
    giveConsent: (state) => {
      state.consent = true;
    },
    declineConsent: (state) => {
      state.consent = false;
    },
    optOutAds: (state) => {
      state.optOut = true;
    },
    clearConsent: (state) => {
      state.consent = false;
      state.optOut = false;
    },
  },
});

export const { giveConsent, declineConsent, optOutAds, clearConsent } =
  consentSlice.actions;

export const consentSelector = (state) => state.consent;

export default consentSlice.reducer;
