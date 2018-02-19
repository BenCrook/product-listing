import React, {Component} from 'react';

import styles from './minicart.css';

class Minicart extends Component {
    constructor(props) {
        super(props);
        console.log(this);
    }

    render() {
        return (
            <div className={styles.minicart}>
                <span className={styles.count}>{this.props.quantity} items</span>
                <span className={styles.total}>£{this.props.total}</span>
            </div>
        )
    }
}

export default Minicart;