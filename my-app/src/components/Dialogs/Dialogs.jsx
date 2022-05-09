import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/1">Dymich</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Valera</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Misha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Igor</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5">Pavel</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/6">Andrey</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Bless you!</div>
            </div>
        </div>
    );
};
