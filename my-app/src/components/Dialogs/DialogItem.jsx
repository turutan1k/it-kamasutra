import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <li>
            <NavLink
                to={path}
                className={(navData) =>
                    navData.isActive ? styles.active : styles.none
                }
            >
                <div className={styles.dialog}>{props.name}</div>
            </NavLink>
        </li>
    );
};

export default DialogItem;
