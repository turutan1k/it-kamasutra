import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from './Message';
import { Button } from 'antd';
import {RightCircleOutlined } from '@ant-design/icons';

export const Dialogs = (props) => {
    let newMessageElement = React.useRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    };
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
            <ul className={styles.dialogsElements}>{dialogsElements}</ul>
            <ul className={styles.messagesElements}>{messagesElements}</ul>
            <div></div>
            <div className={styles.messages}>
                <textarea
                    ref={newMessageElement}
                    placeholder="Write a message..."
                    className={styles.messageTextarea}
                ></textarea>
                <Button className={styles.messageButton} onClick={addMessage}>
                    <RightCircleOutlined />
                </Button>
            </div>
        </div>
    );
};
