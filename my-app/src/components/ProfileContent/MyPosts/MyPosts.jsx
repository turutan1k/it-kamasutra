import React from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post/Post';

import { Button } from 'antd';
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from '../../../redux/state';

export const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} key={p.id} />
    ));

    let newPostElement = React.useRef();
    let addPost = () => {
        // props.addPost();
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div className={styles.newPost}>
                <div className={styles.textArea}>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        placeholder="Write your description here..."
                        value={props.newPostText}
                    />
                </div>
                <Button onClick={addPost}>Add post</Button>
            </div>
            <div className={styles.posts}>{postsElements}</div>
        </div>
    );
};
