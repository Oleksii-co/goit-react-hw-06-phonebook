import { useSelector } from 'react-redux';
import contactList from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ deleteContact }) => {
  const contactData = useSelector(state => state.contacts.contacts);
  return (
    <ol className={contactList.contactList}>
      {contactData.map(({ id, tel, name }) => {
        return (
          <li key={id}>
            {name}: {tel}
            <button type="button" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ol>
  );
};

export default ContactList;

ContactList.propTypes = {
  deleteContact: PropTypes.func,
};
