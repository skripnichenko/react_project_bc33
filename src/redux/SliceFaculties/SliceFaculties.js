import { createSlice } from "@reduxjs/toolkit";
import {
  addFaculties,
  changeFaculties,
  deleteFaculties,
  getFaculties,
} from "./operationFaculties";

const FacultiesSlice = createSlice({
  name: "faculties",
  initialState: {
    faculties: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    ////GET Faculties
    [getFaculties.pending]: (state) => {
      // return {...state, isLoading: true}
      state.isLoading = true;
      state.error = null;
    },
    [getFaculties.fulfilled]: (state, action) => {
      state.faculties = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    [getFaculties.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //////Delete Faculties
    [deleteFaculties.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteFaculties.fulfilled]: (state, { payload }) => {
      state.faculties = state.faculties.filter(
        (fucult) => payload.id !== fucult.id
      );
      state.error = null;
      state.isLoading = false;
    },
    [deleteFaculties.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    /////// Change Faculties
    [changeFaculties.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [changeFaculties.fulfilled]: (state, action) => {
      state.faculties = state.faculties.map((fucult) => {
        return fucult.id === action.payload.id ? action.payload : fucult;
      });
      state.error = null;
      state.isLoading = false;
    },
    [changeFaculties.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    /////// ADD Faculties
    [addFaculties.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [addFaculties.fulfilled]: (state, action) => {
      state.faculties = [...state.faculties, action.payload];
      state.error = null;
      state.isLoading = false;
    },
    [addFaculties.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default FacultiesSlice.reducer;
