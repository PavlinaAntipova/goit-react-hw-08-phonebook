import { createSlice } from '@reduxjs/toolkit';
import { registration, logout, login, refresh } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
  extraReducers: {
    [registration.fulfilled] (state, action) {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refresh.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [refresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [refresh.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
    }
});

export const authReducer = authSlice.reducer;

