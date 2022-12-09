import { createAsyncThunk } from "@reduxjs/toolkit";
import { TutorsApi } from "../../API/api";

export const getTutors = createAsyncThunk(
  "tutors/getTutors",

  async (_, thunkAPI) => {
    try {
      const response = await TutorsApi.getTutors();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTutors = createAsyncThunk(
  "tutors/addTutors",

  async (obj, thunkAPI) => {
    try {
      const response = await TutorsApi.addTutor(obj);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
