import { createAsyncThunk } from "@reduxjs/toolkit";
import { FacultiesApi } from "../../API/api";

export const getFaculties = createAsyncThunk(
  "faculties/getFaculties",

  async (_, thunkAPI) => {
    try {
      const response = await FacultiesApi.getFaculties();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFaculties = createAsyncThunk(
  "faculties/deleteFaculties",

  async (id, thunkAPI) => {
    try {
      const response = await FacultiesApi.deleteFaculty(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeFaculties = createAsyncThunk(
  "faculties/changeFaculties",

  async ({ id, name }, thunkAPI) => {
    try {
      const response = await FacultiesApi.changeFaculty(id, { name });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFaculties = createAsyncThunk(
  "faculties/addFaculties",

  async (obj, thunkAPI) => {
    try {
      const response = await FacultiesApi.addFaculty(obj);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
