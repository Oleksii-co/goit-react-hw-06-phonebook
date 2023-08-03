import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('phonebook/addContact', contactData => {
  return {
    payload: {
      id: nanoid(),
      ...contactData,
    },
  };
});

export const deleteContact = createAction('phonebook/deleteContact');
export const setFilter = createAction('phonebook/setFilter');
