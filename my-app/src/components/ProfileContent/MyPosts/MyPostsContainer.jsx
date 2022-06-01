import React from 'react';
import Post from './Post/Post';

import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from '../../../redux/reducers/profilePageReducer';
import { MyPosts } from './MyPosts';
import StoreContext from '../../../StoreContext';

export const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                };
                return (
                    <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};
