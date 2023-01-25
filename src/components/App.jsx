import React from 'react';
import { useSelector } from 'react-redux';

import Form from './ContactAddForm/ContactAddForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter';
import { getContactsValue } from 'redux/contactsSlice/contactsSlice';

const App = () => {
  let contacts = useSelector(getContactsValue);
  return (
    <div className="wrapper">
      <h1 className="heading">Phonebook</h1>
      <Form />
      {contacts.length > 0 ? (
        <>
          <h2>Find Contacts</h2>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <p>There are no any contacts at the moment</p>
      )}
    </div>
  );
};

export default App;
