import React, { useEffect, useReducer, useState } from 'react';
import { getContacts, saveContacts } from '../actions/contactActions';
import { contactsReducer as reducer } from '../reducers/contactsReducer';
import ContactForm from './ContactForm';
import Contacts from './Contacts';

const ContactBook = () => {

    const [contacts, dispatch] = useReducer(reducer, [], getContacts);
    const [formView, setFormView] = useState(false);

    useEffect(() => {
        saveContacts(contacts);
    }, [contacts]);

    return (
        <div className="container">
            <button className="btn btn-success mt-2" onClick={() => setFormView(state => !state)}>
                {formView ? "Cerrar formulario" : "Agregar contacto"}
            </button>
            <div class="row justify-content-center">
                {formView && <ContactForm onSubmit={dispatch} />}
            </div>
            <Contacts onChange={dispatch} contacts={contacts} />
        </div>
    );
};

export default ContactBook;
