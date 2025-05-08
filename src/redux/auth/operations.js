/*import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const registerThunk = createAsyncThunk('createAsyncThunk', async (body, thunkApi) => {
    try {
        return thunkApi.rejectWithValue(error.message);

    } catch (error) {
        return thunkApi.rejectWithValue(error.message); 
    }
    
});
export const loginThunk = createAsyncThunk("createAsyncThunk", async (body, thunkApi) => {
    try {
return thunkApi.rejectWithValue(error.message);
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }});