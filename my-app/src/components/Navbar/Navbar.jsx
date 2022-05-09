import React from 'react';
import classes from './Navbar.module.css';

import { SkinFilled } from '@ant-design/icons';
import { MessageFilled } from '@ant-design/icons';
import { ReadFilled } from '@ant-design/icons';
import { CustomerServiceFilled } from '@ant-design/icons';
import { SettingFilled } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <div>
                    <NavLink
                        to="/profile"
                        className={(navData) =>
                            navData.isActive ? classes.active : classes.item
                        }
                    >
                        <SkinFilled style={{ color: '#fff', padding: '5px' }} />
                        Profile
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/dialogs"
                        className={(navData) =>
                            navData.isActive ? classes.active : classes.item
                        }
                    >
                        <MessageFilled
                            style={{ color: '#fff', padding: '5px' }}
                        />
                        Messages
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/news"
                        className={(navData) =>
                            navData.isActive ? classes.active : classes.item
                        }
                    >
                        <ReadFilled style={{ color: '#fff', padding: '5px' }} />
                        News
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/music"
                        className={(navData) =>
                            navData.isActive ? classes.active : classes.item
                        }
                    >
                        <CustomerServiceFilled
                            style={{ color: '#fff', padding: '5px' }}
                        />
                        Music
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/settings"
                        className={(navData) =>
                            navData.isActive ? classes.active : classes.item
                        }
                    >
                        <SettingFilled
                            style={{ color: '#fff', padding: '5px' }}
                        />
                        Settings
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
