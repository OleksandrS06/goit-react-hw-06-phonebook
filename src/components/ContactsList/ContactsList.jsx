import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsList.module.css';
import {
  deleteContact,
  getContactsValue,
} from 'redux/contactsSlice/contactsSlice';
import { getFilterValue } from 'redux/filterSlice/filterSlice';

const ContactsList = () => {
  let contacts = useSelector(getContactsValue);
  let filter = useSelector(getFilterValue);

  const dispatch = useDispatch();

  const deleteBtHandler = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const filtered = filteredContacts();

  return (
    <ul className={css.contactList}>
      {filtered.map(el => {
        return (
          <li key={el.id} className={css.contactList__item}>
            <span>{el.name}</span>
            <span className={css.number}>{el.number}</span>
            <button onClick={() => deleteBtHandler(el.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactsList;
