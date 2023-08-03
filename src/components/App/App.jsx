import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { addContact, deleteContact, setFilter } from 'redux/phonebookActions';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);

  const filter = useSelector(state => state.contacts.filter);

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

  const filterChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContacts} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterChange} />
      <ContactList
        contactData={filterContacts}
        deleteContact={onDeleteContact}
      />
    </>
  );
};

export default App;
