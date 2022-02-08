import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

const Contacts = ({ contacts, onChange }) => {
    return (
        <div className="container my-5">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Número</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (<Contact onChange={onChange} key={contact.id} contact={contact} />))}
                </tbody>
            </table>

        </div>
    );
};


Contacts.propTypes = {
    contacts: PropTypes.array.isRequired
};

export default Contacts;
