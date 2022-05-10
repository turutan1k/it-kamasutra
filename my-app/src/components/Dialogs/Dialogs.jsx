import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return <div className={styles.message}>{props.message}</div>;
};

export const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name="Dimych" id="1" />
                <DialogItem name="Valera" id="2" />
                <DialogItem name="Misha" id="3" />
                <DialogItem name="Igor" id="4" />
                <DialogItem name="Pavel" id="5" />
                <DialogItem name="Andrey" id="6" />
            </div>
            <div className={styles.messages}>
                <Message message="Hello" />
                <Message message="How are you?" />
                <Message message="Bless you!" />
            </div>
        </div>
    );
};
