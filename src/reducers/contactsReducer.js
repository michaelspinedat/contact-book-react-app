export const contactsReducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "delete":
            const id = action.payload;
            return state.filter(contact => contact.id !== id);
        default:
            return state;
    }
};
