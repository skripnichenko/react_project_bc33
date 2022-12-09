import { createSlice } from "@reduxjs/toolkit";
import { addTutors, getTutors } from "./operationTutors";

const TutorsSlice = createSlice({
  name: "tutors",
  initialState: {
    tutors: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    ////GET Tutors
    [getTutors.pending]: (state) => {
      // return {...state, isLoading: true}
      state.isLoading = true;
      state.error = null;
    },
    [getTutors.fulfilled]: (state, action) => {
      state.tutors = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    [getTutors.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    /////// ADD Tutors
    [addTutors.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [addTutors.fulfilled]: (state, action) => {
      state.tutors = [...state.tutors, action.payload];
      state.error = null;
      state.isLoading = false;
    },
    [addTutors.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default TutorsSlice.reducer;
