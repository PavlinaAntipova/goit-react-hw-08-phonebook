import { createSlice } from '@reduxjs/toolkit';
import { getContacts, deleteContact, addContact } from './contacts-operations';

const initialState = {
  items: [],
  filter: '',
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addFilter(state, action) {
            state.filter = action.payload
        },
    },
    extraReducers: {
        [getContacts.fulfilled]: (state, action) => { state.items = [...action.payload]; state.isLoading = false },
        [deleteContact.fulfilled]: (state, action) => { state.items = [...state.items.filter(contact => contact.id !== action.payload.id)]; state.isLoading = false },
        [addContact.fulfilled]: (state, action) => { state.items = [...action.payload]; state.isLoading = false },
        [getContacts.rejected]: (state, action) => { state.error = action; state.isLoading = false },
        [deleteContact.rejected]: (state, action) => { state.error = action; state.isLoading = false },
        [addContact.rejected]: (state, action) => { state.error = action; state.isLoading = false },
        [getContacts.pending]: (state) => {state.isLoading = true},
        [deleteContact.pending]: (state) => {state.isLoading = true},
        [addContact.pending]: (state) => {state.isLoading = true},
    }
});

export const { addFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;