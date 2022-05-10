import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

import { Button } from 'antd';

export const MyPosts = () => {
    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div className={styles.newPost}>
                <textarea placeholder="Write a description below..."></textarea>
                <Button>Add post</Button>
            </div>
            <div className={styles.posts}>
                <Post message="HI, How are u?" likesCount="21" />
                <Post message="It's my first post" likesCount="10130" />
            </div>
        </div>
    );
};
