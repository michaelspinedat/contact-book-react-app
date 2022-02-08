import React, { useReducer } from 'react';
import { contactsReducer as reducer } from '../reducers/contactsReducer';
import ContactForm from './ContactForm';
import Contacts from './Contacts';

const ContactBook = () => {

    const initialContacts = [
        { id: "1", name: "Michael", number: "3148000279" },
        { id: "2", name: "Jois", number: "3108000279" }
    ];

    const [contacts, dispatch] = useReducer(reducer, initialContacts);

    return (
        <div className="container">
            <ContactForm onSubmit={dispatch} />
            <Contacts onChange={dispatch} contacts={contacts} />
        </div>
    );
};

export default ContactBook;
