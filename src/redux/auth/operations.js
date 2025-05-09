import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const goitAPI = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const registerThunk = createAsyncThunk('register', async (body, thunkApi) => {
    try {
    const response = await goitAPI.post("/users/signup", body);
    return response.data;

    } catch (error) {
        return thunkApi.rejectWithValue(error.message); 
    }
    
});
export const loginThunk = createAsyncThunk('login', async (body, thunkApi) => {
    try {
        const response = await goitAPI.post("/users/login", body);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }});