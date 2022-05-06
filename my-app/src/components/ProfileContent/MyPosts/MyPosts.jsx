import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

import { Button, Space } from 'antd';

export const MyPosts = () => {
    return (
        <>
            My posts
            <div>
                <textarea></textarea>
                <Space style={{ width: '100%' }}>
                    <Button type="primary">Add post</Button>
                </Space>
            </div>
            <div className={classes.posts}>
                <Post message="HI, How are u?" likesCount="21" />
                <Post message="It's my first post" likesCount="10130" />
            </div>
        </>
    );
};
