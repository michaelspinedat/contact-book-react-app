import { v4 as uuidv4 } from 'uuid';
const addAction = contact => {
    const id = uuidv4();
    return ({
        type: "add",
        payload: {
            ...contact,
            id
        }
    });
}

const deleteAction = id => {
    return ({
        type: "delete",
        payload: id
    });
}

const getContacts = () => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    return contacts || [];
}

const saveContacts = contacts => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}

export { addAction, deleteAction, getContacts, saveContacts };

