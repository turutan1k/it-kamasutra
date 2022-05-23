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
            newPostText: 'Message',
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
        debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // паттерн наблюдатель
    },

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
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newText);
        }
    },
};

window.store = store;

export default store;
