import React from 'react';
import Friend from './Friend/Friend';
import styles from './Friends.module.css';

const Friends = (props) => {
    let friendsElements = props.friends.map((f) => (
        <Friend name={f.name} img={f.img} key={f.id} />
    ));

    return <div className={styles.bar}>{friendsElements}</div>;
};

export default Friends;
