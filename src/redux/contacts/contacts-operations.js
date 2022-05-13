import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


export const getContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
  try {
    const {data} = await axios.get('/contacts');
    return data;
  } catch (error) {
      return thunkAPI.rejectWithValue();
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const { data } = await axios.post(`/contacts`, contact);
    return data;
  } catch (error) {
      return thunkAPI.rejectWithValue();
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    const { data } = await axios.post(`/contacts/${id}`, {
        method: "DELETE",
    });
    return data;
  } catch (error) {
      return thunkAPI.rejectWithValue();
  }
});


