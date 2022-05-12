import React from 'react';
import styles from './Navbar.module.css';

import {
    AliwangwangFilled,
    SkinFilled,
    MessageFilled,
    ReadFilled,
    CustomerServiceFilled,
    SettingFilled,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = (props) => {
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
                <li className={styles.friends}>
                    <div className={styles.item}>
                        <AliwangwangFilled
                            style={{ color: '#fff', padding: '5px' }}
                        />
                        Friends:
                    </div>
                    <Friends friends={props.state.friends} />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
