import React, { useState } from 'react';
import { addAction } from '../actions/contactActions';

const ContactForm = ({ onSubmit }) => {

    const [contact, setContact] = useState({
        name: "",
        number: ""
    });

    const handleChange = e => {
        const { target } = e;
        const { name, value } = target;
        setContact(state => ({ ...state, [name]: value }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(addAction(contact));
    }

    return (
        <div className="col-6 mt-3">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Nombre
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Nombre"
                        value={contact.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">
                        Número
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="number"
                        name="number"
                        placeholder="Numero"
                        value={contact.number}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Agregar
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
