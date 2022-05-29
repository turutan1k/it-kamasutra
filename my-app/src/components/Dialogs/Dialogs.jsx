import React from 'react';
import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem';
import Message from './Message';
import { Button } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';

export const Dialogs = (props) => {
    let state = props.dialogsPage;
    //*dialogs.map
    let dialogsElements = state.dialogs.map((d) => (
        <DialogItem name={d.name} id={d.id} key={d.id} />
    ));
    //*messages.map
    let messagesElements = state.messages.map((m) => (
        <Message message={m.message} key={m.id} />
    ));
    let newMessageText = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (e) => {
        let message = e.target.value;
        props.updateNewMessageText(message);
    };

    return (
        <div className={styles.dialogs}>
            <ul className={styles.dialogsElements}>{dialogsElements}</ul>
            <ul className={styles.messagesElements}>{messagesElements}</ul>
            <div></div>
            <div className={styles.messages}>
                <textarea
                    value={newMessageText}
                    onChange={onNewMessageChange} //*функция вызывается textarea, когда будут происходить изменения
                    placeholder="Write a message..."
                    className={styles.messageTextarea}
                ></textarea>
                <Button
                    className={styles.messageButton}
                    onClick={onSendMessageClick}
                >
                    <RightCircleOutlined />
                </Button>
            </div>
        </div>
    );
};
