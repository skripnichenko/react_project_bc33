import { createAsyncThunk } from "@reduxjs/toolkit";
import { CitiesApi } from "../../API/api";

export const getCities = createAsyncThunk(
  "cities/getCities",

  async (_, thunkAPI) => {
    try {
      const response = await CitiesApi.getCities();
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCities = createAsyncThunk(
  "cities/deleteCities",

  async (id, thunkAPI) => {
    try {
      const response = await CitiesApi.deleteFaculty(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeCities = createAsyncThunk(
  "cities/changeCities",

  async ({ id, name }, thunkAPI) => {
    try {
      const response = await CitiesApi.changeFaculty(id, { name });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCities = createAsyncThunk(
  "cities/addCities",

  async (obj, thunkAPI) => {
    try {
      const response = await CitiesApi.addFaculty(obj);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
