import React from 'react';
import styles from './Header.module.scss';
import { DribbbleSquareFilled } from '@ant-design/icons';
const Header = () => {
    return (
        <header className={styles.header}>
            <i>
                <DribbbleSquareFilled style={{ width: '50px' }} />
            </i>
            <h2>Social Network</h2>
            <i>
                <DribbbleSquareFilled style={{ width: '50px' }} />
            </i>
        </header>
    );
};

export default Header;
