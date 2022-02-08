import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ contact }) => {

    const { id, name, number } = contact;

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{number}</td>
            <td>Eliminar</td>
        </tr>
    );
};

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;
