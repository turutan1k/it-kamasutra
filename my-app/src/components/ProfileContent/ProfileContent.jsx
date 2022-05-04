import React from 'react';
import classes from './/ProfileContent.module.css';
import { MyPosts } from './MyPosts/MyPosts';

const ProfileContent = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    className={classes.banner}
                    alt="banner"
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                />
            </div>
            <div>
                <img
                    alt="grapefruit"
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                />
            </div>
            <MyPosts />
        </div>
    );
};

export default ProfileContent;
