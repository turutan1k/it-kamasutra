import React from 'react';
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator,
} from '../../redux/reducers/dialogsPageReducer';
import StoreContext from '../../StoreContext';
import { Dialogs } from './Dialogs';

export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator());
                };
                let onNewMessageChange = (message) => {
                    store.dispatch(updateNewMessageTextActionCreator(message));
                };
                return (
                    <Dialogs
                        updateNewMessageText={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={store.getState().dialogsPage}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};
