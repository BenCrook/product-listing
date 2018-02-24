import React, {Component} from 'react';
import styles from './header.css';

import Minicart from '../minicart/minicart';
import Logo from '../logo/logo.js';

class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <Logo />
                <Minicart emptyClickEvent={this.props.emptyClickEvent} quantity={this.props.quantity} total={this.props.total} productsInBag={this.props.productsInBag} />
            </header>
        )
    }
}

export default Header;