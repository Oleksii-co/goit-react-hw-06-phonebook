import contactForm from './ContactForm.module.css';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phonebookActions';

const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);

  const addContacts = newContactData => {
    const newContact = {
      ...newContactData,
    };
    if (!checkNewContactPresence(newContact.name)) {
      dispatch(addContact(newContact));
    } else {
      alert(`${newContact.name} is already in contacts!`);
    }
  };

  const checkNewContactPresence = contactName => {
    return contacts.some(contact => contact.name === contactName);
  };

  const formSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    addContacts({
      name: evt.target.name.value,
      tel: evt.target.tel.value,
    });
    form.reset();
  };

  return (
    <form onSubmit={formSubmit} className={contactForm.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
