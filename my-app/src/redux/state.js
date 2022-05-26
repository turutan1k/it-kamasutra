import dialogsPageReducer from './reducers/dialogsPageReducer';
import profilePageReducer from './reducers/profilePageReducer';
import sideBarReducer from './reducers/sideBarReducer';

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
    //
    //dispatch(action) - posts
    dispatch(action) {
        this._state.profilePage = profilePageReducer(
            this._state.profilePage,
            action
        );
        this._state.dialogsPage = dialogsPageReducer(
            this._state.dialogsPage,
            action
        );
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    },
};

window.store = store;

export default store;
