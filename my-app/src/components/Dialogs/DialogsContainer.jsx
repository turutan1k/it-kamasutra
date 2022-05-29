import React from 'react';
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator,
} from '../../redux/reducers/dialogsPageReducer';
import { Dialogs } from './Dialogs';

export const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    };
    let onNewMessageChange = (message) => {
        props.store.dispatch(updateNewMessageTextActionCreator(message));
    };

    return (
        <Dialogs
            updateNewMessageText={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    );
};
