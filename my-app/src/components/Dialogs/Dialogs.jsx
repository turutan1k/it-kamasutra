import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem';
import Message from './Message';

export const Dialogs = () => {
    let dialogsData = [
        { id: 1, name: 'Dymich' },
        { id: 2, name: 'Valera' },
        { id: 3, name: 'Misha' },
        { id: 4, name: 'Igor' },
        { id: 5, name: 'Pavel' },
        { id: 6, name: 'Andrey' },
    ];

    let messagesData = [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Bless you!' },
    ];

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={styles.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    );
};
