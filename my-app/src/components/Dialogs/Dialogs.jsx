import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from './Message';

export const Dialogs = (props) => {
    //*dialogs.map
    let dialogsElements = props.state.dialogs.map((d) => (
        <DialogItem name={d.name} id={d.id} key={d.id} />
    ));
    //*messages.map
    let messagesElements = props.state.messages.map((m) => (
        <Message message={m.message} key={m.id} />
    ));

    return (
        <div className={styles.dialogs}>
            <ul>{dialogsElements}</ul>
            <ul className={styles.messages}>{messagesElements}</ul>
        </div>
    );
};
