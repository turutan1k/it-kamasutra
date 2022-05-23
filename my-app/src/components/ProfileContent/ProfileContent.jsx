import React from 'react';
// import styles from './ProfileContent.module.scss';
import { MyPosts } from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ProfileContent = (props) => {

    return (
        <>
            <ProfileInfo />
            <MyPosts
                posts={props.profilePage.posts}
                dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText}
            />
        </>
    );
};

export default ProfileContent;
