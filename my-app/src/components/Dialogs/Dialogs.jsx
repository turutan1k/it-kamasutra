import React from 'react';
import classes from './Dialogs.module.css';
export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>Dymich</div>
                <div className={classes.dialog}>Valera</div>
                <div className={classes.dialog}>Andrey</div>
                <div className={classes.dialog}>Nikita</div>
                <div className={classes.dialog}>Vladimir</div>
                <div className={classes.dialog}>Grigoriy</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Bless you!</div>
            </div>
        </div>
    );
};
