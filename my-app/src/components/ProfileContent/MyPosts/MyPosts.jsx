import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

import { Button } from 'antd';

export const MyPosts = (props) => {
    
    let postsElements = props.posts.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} key={p.id}/>
    ));

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div className={styles.newPost}>
                <textarea placeholder="Write a description below..."></textarea>
                <Button>Add post</Button>
            </div>
            <div className={styles.posts}>{postsElements}</div>
        </div>
    );
};
