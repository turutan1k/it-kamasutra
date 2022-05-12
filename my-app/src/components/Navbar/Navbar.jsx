import React from 'react';
import styles from './Navbar.module.css';

import { SkinFilled } from '@ant-design/icons';
import { MessageFilled } from '@ant-design/icons';
import { ReadFilled } from '@ant-design/icons';
import { CustomerServiceFilled } from '@ant-design/icons';
import { SettingFilled } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={(navData) =>
                            navData.isActive ? styles.active : styles.item
                        }
                    >
                        <SkinFilled style={{ color: '#fff', padding: '5px' }} />
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dialogs"
                        className={(navData) =>
                            navData.isActive ? styles.active : styles.item
                        }
                    >
                        <MessageFilled
                            style={{ color: '#fff', padding: '5px' }}
                        />
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/news"
                        className={(navData) =>
                            navData.isActive ? styles.active : styles.item
                        }
                    >
                        <ReadFilled style={{ color: '#fff', padding: '5px' }} />
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/music"
                        className={(navData) =>
                            navData.isActive ? styles.active : styles.item
                        }
                    >
                        <CustomerServiceFilled
                            style={{ color: '#fff', padding: '5px' }}
                        />
                        Music
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/settings"
                        className={(navData) =>
                            navData.isActive ? styles.active : styles.item
                        }
                    >
                        <SettingFilled
                            style={{ color: '#fff', padding: '5px' }}
                        />
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
