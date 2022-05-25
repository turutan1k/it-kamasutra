const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'HI, How are u?', likesCount: 12 },
                { id: 2, message: 'Its my first post', likesCount: 302 },
                { id: 3, message: 'Hello', likesCount: 10 },
                {
                    id: 4,
                    message: 'This is my fourth post :D',
                    likesCount: 1230,
                },
            ],
            newPostText: '',
        },
        dialogsPage: {
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
        },
        sideBar: {
            friends: [
                {
                    id: 1,
                    name: 'Andrew',
                    img: 'https://iconape.com/wp-content/png_logo_vector/avatar.png',
                },
                {
                    id: 2,
                    name: 'Svetlana',
                    img: 'https://iconape.com/wp-content/png_logo_vector/avatar-11.png',
                },
                {
                    id: 3,
                    name: 'Timofei',
                    img: 'https://iconape.com/wp-content/png_logo_vector/avatar-7.png',
                },
                {
                    id: 4,
                    name: 'Kristina',
                    img: 'https://iconape.com/wp-content/png_logo_vector/avatar-3.png',
                },
            ],
        },
    },
    _callSubscriber() {
        console.log('state is changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // паттерн наблюдатель
    },
    //dispatch(action) - posts
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(postText) {
        this._state.profilePage.newPostText = postText;
        this._callSubscriber(this._state);
    },
    //dispatch(action) - messages
    _sendMessage() {
        let messageText = this._state.dialogsPage.newMessageText;
        let newMessage = {
            id: 4,
            message: messageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    _updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.postText);
        } else if (action.type === SEND_MESSAGE) {
            this._sendMessage();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._updateNewMessageText(action.newMessage);
            this._callSubscriber(this._state);
        }
    },
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        postText: text,
    };
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

window.store = store;

export default store;
