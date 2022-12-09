import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer";

import citiesReducer from "./SliceFaculties/SliceFaculties";
import facultiesReducer from "./SliceFaculties/SliceFaculties";
import tutorsReducer from "./SliceTutors/SliceTutors";

console.log("citiesReducer", citiesReducer);

const store = configureStore({
  reducer: {
    faculties: facultiesReducer,
    cities: citiesReducer,
    tutors: tutorsReducer,
  },
});

export default store;
