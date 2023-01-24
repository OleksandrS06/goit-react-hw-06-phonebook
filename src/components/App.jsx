import React from 'react';

import Form from './ContactAddForm/ContactAddForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter';

const App = () => {
  return (
    <div className="wrapper">
      <h1 className="heading">Phonebook</h1>
      <Form />
      <h2>Find Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
