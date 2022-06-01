import React from 'react';
// import styles from './ProfileContent.module.scss';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ProfileContent = (props) => {
    return (
        <>
            <ProfileInfo />
            <MyPostsContainer />
        </>
    );
};

export default ProfileContent;
