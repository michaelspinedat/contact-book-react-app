import React from 'react';
import Contacts from './Contacts';

const ContactBook = () => {

    const contacts = [
        {id: "1", name: "Michael", number: "3148000279"},
        {id: "2", name: "Jois", number: "3108000279"}
    ];

    return (
        <div className="container">
            <Contacts contacts={contacts} />
        </div>
    );
};

export default ContactBook;
