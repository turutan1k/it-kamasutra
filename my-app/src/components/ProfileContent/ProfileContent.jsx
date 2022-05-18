import React from 'react';
// import styles from './ProfileContent.module.css';
import { MyPosts } from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ProfileContent = (props) => {
    return (
        <>
            <ProfileInfo />
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.profilePage.newPostText}
            />
        </>
    );
};

export default ProfileContent;
