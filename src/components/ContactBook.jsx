import React from 'react';
import ContactForm from './ContactForm';
import Contacts from './Contacts';

const ContactBook = () => {

    const contacts = [
        {id: "1", name: "Michael", number: "3148000279"},
        {id: "2", name: "Jois", number: "3108000279"}
    ];

    return (
        <div className="container">
            <ContactForm />
            <Contacts contacts={contacts} />
        </div>
    );
};

export default ContactBook;
