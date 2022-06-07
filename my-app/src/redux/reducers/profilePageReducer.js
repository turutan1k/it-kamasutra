const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    { id: 5, message: state.newPostText, likesCount: 0 },
                ],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.postText,
            };
        }

        default: {
            return state;
        }
    }
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

export default profilePageReducer;
