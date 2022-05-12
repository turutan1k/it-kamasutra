import React from 'react';
import styles from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={styles.item}>
            <img className={styles.img} src={props.img} alt="friend ${}" />
            <div className={styles.name}>{props.name}</div>
        </div>
    );
};

export default Friend;
