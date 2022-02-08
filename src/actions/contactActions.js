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

export { addAction };

