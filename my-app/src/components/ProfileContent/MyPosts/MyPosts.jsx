import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

import { Button } from 'antd';

export const MyPosts = () => {
    let postsData = [
        { id: 1, message: 'HI, How are u?', likesCount: 12 },
        { id: 2, message: 'Its my first post', likesCount: 302 },
    ];

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div className={styles.newPost}>
                <textarea placeholder="Write a description below..."></textarea>
                <Button>Add post</Button>
            </div>
            <div className={styles.posts}>
                <Post
                    message={postsData[0].message}
                    likesCount={postsData[0].likesCount}
                />
                <Post
                    message={postsData[1].message}
                    likesCount={postsData[1].likesCount}
                />
            </div>
        </div>
    );
};
