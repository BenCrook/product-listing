import React from 'react';
import styles from './header.css';

import Logo from '../logo/logo.js';

function Header(props) {
    return (
        <header className={styles.header}>
            <Logo />
        </header>
    );
}

export default Header;