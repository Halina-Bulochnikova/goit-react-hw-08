import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitAPI } from "../auth/operations";
import { toast } from "react-hot-toast";

const setAuthHeader = (token) => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token available");
    }

    setAuthHeader(token);
    try {
      const response = await goitAPI.get("/contacts");
      console.log("Fetched contacts:", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token available");
    }

    setAuthHeader(token);
    try {
      const response = await goitAPI.post("/contacts", contact);
      toast.success(`Контакт ${response.data.name} додано успішно`);
      return response.data;
    } catch (error) {
      toast.error("Помилка при додаванні контакту");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (contactId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue("No token available");
    }

    setAuthHeader(token);
    try {
      await goitAPI.delete(`/contacts/${contactId}`);
      toast.success("Контакт видалено успішно");
      return contactId;
    } catch (error) {
      toast.error("Помилка при видаленні контакту");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
