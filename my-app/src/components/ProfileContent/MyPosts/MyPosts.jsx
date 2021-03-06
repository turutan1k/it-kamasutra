import React from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post/Post';

import { Button } from 'antd';

export const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} key={p.id} />
    ));

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div className={styles.newPost}>
                <textarea
                    className={styles.postArea}
                    onChange={onPostChange}
                    ref={newPostElement}
                    placeholder="Write your description here..."
                    value={props.newPostText}
                />
                <Button className={styles.postButton} onClick={onAddPost}>
                    Add post
                </Button>
            </div>
            <div className={styles.posts}>{postsElements}</div>
        </div>
    );
};
