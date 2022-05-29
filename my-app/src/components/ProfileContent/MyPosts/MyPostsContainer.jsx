import React from 'react';
import Post from './Post/Post';

import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from '../../../redux/reducers/profilePageReducer';
import { MyPosts } from './MyPosts';

export const MyPostsContainer = (props) => {
    debugger;
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    );
};
