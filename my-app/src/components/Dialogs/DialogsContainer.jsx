import React from 'react';
import { connect } from 'react-redux';
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator,
} from '../../redux/reducers/dialogsPageReducer';
import { Dialogs } from './Dialogs';

const mapStateToProps = (state) => {
    return { dialogsPage: state.dialogsPage };
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (message) => {
            dispatch(updateNewMessageTextActionCreator(message));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
    };
};

export const DialogsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dialogs);
