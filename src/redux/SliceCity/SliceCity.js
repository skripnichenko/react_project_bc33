import { createSlice } from "@reduxjs/toolkit";
import {
  addCities,
  changeCities,
  deleteCities,
  getCities,
} from "./operationCities";

const CitiesSlice = createSlice({
  name: "cities",
  initialState: {
    cities: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    ////GET Cities
    [getCities.pending](state) {
      console.log("payload");
      // return {...state, isLoading: true}
      state.isLoading = true;
      state.error = null;
    },
    [getCities.fulfilled](state, action) {
      console.log("payload", action.payload);
      state.cities = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    [getCities.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    //////Delete Cities
    [deleteCities.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteCities.fulfilled]: (state, { payload }) => {
      state.cities = state.cities.filter((city) => payload.id !== city.id);
      state.error = null;
      state.isLoading = false;
    },
    [deleteCities.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    /////// Change Cities
    [changeCities.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [changeCities.fulfilled]: (state, action) => {
      state.cities = state.cities.map((city) => {
        return city.id === action.payload.id ? action.payload : city;
      });
      state.error = null;
      state.isLoading = false;
    },
    [changeCities.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    /////// ADD Cities
    [addCities.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [addCities.fulfilled]: (state, action) => {
      state.cities = [...state.cities, action.payload];
      state.error = null;
      state.isLoading = false;
    },
    [addCities.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default CitiesSlice.reducer;
