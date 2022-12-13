import { createAsyncThunk } from "@reduxjs/toolkit";
import { CitiesApi } from "../../API/api";

export const getCities = createAsyncThunk(
  "cities/getCities",

  async (_, thunkAPI) => {
    try {
      const response = await CitiesApi.getCities();
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
      const response = await CitiesApi.deleteCity(id);
      console.log("first");
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
      const response = await CitiesApi.changeCity(id, { name });
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
      const response = await CitiesApi.addCity(obj);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
