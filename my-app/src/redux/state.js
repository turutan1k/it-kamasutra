import { rerenderEntireTree } from '../render';

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'HI, How are u?', likesCount: 12 },
            { id: 2, message: 'Its my first post', likesCount: 302 },
            { id: 3, message: 'Hello', likesCount: 10 },
            { id: 4, message: 'This is my fourth post :D', likesCount: 1230 },
        ],
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
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export default state;
