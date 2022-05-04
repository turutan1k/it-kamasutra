import React from 'react';
import HeaderLogo from '../../images/logo.png';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div>
                <img alt="logo" src={HeaderLogo} />
            </div>
            <div>Social Network</div>
            <div></div>
        </header>
    );
};

export default Header;
