import React, {Component} from 'react';
import styles from './header.css';

import Minicart from '../minicart/minicart';
import Logo from '../logo/logo.js';

class Header extends Component {
    constructor(props) {
        super(props);
        console.log(this);
    }

    render() {
        return (
            <header className={styles.header}>
                <Logo />
                <Minicart quantity={this.props.quantity} total={this.props.total} productsInBag={this.props.productsInBag} />
            </header>
        )
    }
}

export default Header;