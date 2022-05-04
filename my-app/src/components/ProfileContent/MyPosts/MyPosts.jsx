import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div className={classes.posts}>
                <Post />
                <Post />
            </div>
        </div>
    );
};
