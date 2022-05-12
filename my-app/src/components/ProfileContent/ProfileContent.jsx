import React from 'react';
// import styles from './ProfileContent.module.css';
import { MyPosts } from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ProfileContent = (props) => {
    return (
        <>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} />
        </>
    );
};

export default ProfileContent;
