import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.scss';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <li>
            <NavLink
                className={(navData) =>
                    navData.isActive ? styles.active : styles.none
                }
                to={path}
            >
                <div className={styles.dialog}>{props.name}</div>
            </NavLink>
        </li>
    );
};

export default DialogItem;
