import React from 'react';
import PropTypes from 'prop-types';
import { deleteAction } from '../actions/contactActions';

const Contact = ({ contact, onChange }) => {

    const { id, name, number } = contact;

    const handleDelete = () => {
        onChange(deleteAction(id));
    }

    return (
        <tr>
            <th scope="row">{id.slice(0, 8)}</th>
            <td>{name}</td>
            <td>{number}</td>
            <td>
                <button onClick={handleDelete} className="btn btn-danger" type="button">Eliminar</button>
            </td>
        </tr>
    );
};

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;
