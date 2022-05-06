import React from 'react';
import classes from './Header.module.css';
import { DribbbleSquareFilled } from '@ant-design/icons';

const Header = () => {
    return (
        <header className={classes.header}>
            <div>
                <DribbbleSquareFilled style={{ width: '50px' }} />
            </div>
            <div>Social Network</div>
            <div>
                <DribbbleSquareFilled style={{ width: '50px' }} />
            </div>
        </header>
    );
};

export default Header;
