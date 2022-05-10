import React from 'react';
import styles from './ProfileContent.module.css';
import { MyPosts } from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ProfileContent = () => {
    return (
        <>
            <ProfileInfo />
            <MyPosts />
        </>
    );
};

export default ProfileContent;
