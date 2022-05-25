import React from 'react';
import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem';
import Message from './Message';
import { Button } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator,
} from '../../redux/state';

export const Dialogs = (props) => {
    debugger;

    //*dialogs.map
    let dialogsElements = props.state.dialogs.map((d) => (
        <DialogItem name={d.name} id={d.id} key={d.id} />
    ));
    //*messages.map
    let messagesElements = props.state.messages.map((m) => (
        <Message message={m.message} key={m.id} />
    ));
    let newMessageText = props.state.newMessageText;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator());
    };
    let onNewMessageChange = (e) => {
        let message = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(message));
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
