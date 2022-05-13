import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registration = createAsyncThunk('auth/registration', async (user, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/signup', user);
        token.set(data.token);
        return data;
    } catch (error) {
        console.log(error);
       return thunkAPI.rejectWithValue();
    }
});

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', user);
    token.set(data.token);
    return data;
    } catch (error) {
        return thunkAPI.rejectWithValue();
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
       await axios.post('/users/logout');
        token.unset();
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
});

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
      token.set(persistedToken);
      
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);



