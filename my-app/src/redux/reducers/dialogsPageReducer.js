const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dymich' },
        { id: 2, name: 'Valera' },
        { id: 3, name: 'Misha' },
        { id: 4, name: 'Igor' },
        { id: 5, name: 'Pavel' },
        { id: 6, name: 'Andrey' },
    ],
    messages: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Bless you!' },
    ],
    newMessageText: '',
};

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let messageText = state.newMessageText;
            let newMessage = {
                id: 4,
                message: messageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
};

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    };
};

export const updateNewMessageTextActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: message,
    };
};

export default dialogsPageReducer;
