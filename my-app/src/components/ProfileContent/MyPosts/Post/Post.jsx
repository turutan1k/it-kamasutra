import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    console.log(props.message);

    return (
        <div className={styles.item}>
            <img
                src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                alt="avatar"
            />
            {props.message}
            <div>
                <span>Likes</span>
                {props.likesCount}
            </div>
        </div>
    );
};

export default Post;
