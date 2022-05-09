import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

import { Button } from 'antd';

export const MyPosts = () => {
    return (
        <>
            My posts
            <div>
                <textarea placeholder="Write a description below..."></textarea>
            </div>
            <Button type="primary">Add post</Button>
            <div className={classes.posts}>
                <Post message="HI, How are u?" likesCount="21" />
                <Post message="It's my first post" likesCount="10130" />
            </div>
        </>
    );
};
