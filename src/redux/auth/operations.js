import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

export const goitAPI = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setAuthHeader = (token) => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const removeAuthHeader = () => {
  goitAPI.defaults.headers.common.Authorization = ``;
};
export const registerThunk = createAsyncThunk(
  "register",
  async (body, thunkApi) => {
    try {
      const response = await goitAPI.post("/users/signup", body);
      toast.success("Ви успішно зареєструвалися!");
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      toast.error("Ця адреса вже зараеєстрована!");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const loginThunk = createAsyncThunk("login", async (body, thunkApi) => {
  try {
    const response = await goitAPI.post("/users/login", body);
    toast.success("Ви успішно авторизувалися!");
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    toast.error("Ця адреса ще не зареєстрована!");
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logoutThunk = createAsyncThunk("logout", async (_, thunkApi) => {
  try {
    await goitAPI.post("/users/logout");
    removeAuthHeader();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
export const refreshUserThunk = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    try {
      const savedToken = thunkAPI.getState().auth.token;
      console.log(savedToken);

      if (!savedToken) return thunkAPI.rejectWithValue("No token");

      setAuthHeader(savedToken);

      const response = await goitAPI.get("/users/current");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
