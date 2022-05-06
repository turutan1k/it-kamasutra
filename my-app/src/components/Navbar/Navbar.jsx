import React from 'react';
import classes from './Navbar.module.css';

import { SkinFilled } from '@ant-design/icons';
import { MessageFilled } from '@ant-design/icons';
import { ReadFilled } from '@ant-design/icons';
import { CustomerServiceFilled } from '@ant-design/icons';
import { SettingFilled } from '@ant-design/icons';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <div className={classes.item}>
                    <SkinFilled style={{ color: '#fff' }} />
                    <a href="/profile">Profile</a>
                </div>
                <div className={classes.item}>
                    <MessageFilled style={{ color: '#fff' }} />
                    <a href="/dialogs">Messages</a>
                </div>
                <div className={classes.item}>
                    <ReadFilled style={{ color: '#fff' }} />
                    <a href="/news">News</a>
                </div>
                <div className={classes.item}>
                    <CustomerServiceFilled style={{ color: '#fff' }} />
                    <a href="/music">Music</a>
                </div>
                <div className={classes.item}>
                    <SettingFilled style={{ color: '#fff' }} />
                    <a href="/settings">Settings</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
