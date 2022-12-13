import { configureStore } from "@reduxjs/toolkit";

import citiesReducer from "./SliceCity/SliceCity";
import facultiesReducer from "./SliceFaculties/SliceFaculties";
import tutorsReducer from "./SliceTutors/SliceTutors";


const store = configureStore({
  reducer: {
    faculties: facultiesReducer,
    cities: citiesReducer,
    tutors: tutorsReducer,
  },
});

export default store;
