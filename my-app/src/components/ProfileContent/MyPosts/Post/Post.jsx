import React from 'react';
import styles from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.post}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                    alt="avatar"
                />
                {props.message}
            </div>
            <div className={styles.likes}>
                {props.likesCount}
                <span>&nbsp;Likes</span>
            </div>
        </div>
    );
};

export default Post;
