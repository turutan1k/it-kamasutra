import React from 'react';
import Post from './Post/Post';

import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from '../../../redux/reducers/profilePageReducer';
import { MyPosts } from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    };
};

export const MyPostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyPosts);
