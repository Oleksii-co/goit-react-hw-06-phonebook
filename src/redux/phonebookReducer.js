import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './phonebookActions';

const initialState = {
  contacts: [],
  filter: '',
};

export default createReducer(initialState, {
  [addContact]: (state, action) => {
    state.contacts = [...state.contacts, action.payload];
  },
  [deleteContact]: (state, action) => {
    state.contacts = state.contacts.filter(
      contact => contact.id !== action.payload
    );
  },

  [setFilter]: (state, action) => {
    state.filter = action.payload;
  },
});
