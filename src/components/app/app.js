import React, { Component } from 'react';
import styles from './app.css';
import Header from '../header/header.js';
import ProductListing from '../productListing/product-listing.js';

class App extends Component {
    constructor() {
        super();

        this.state = {
            quantity: 0,
            total: 9.99
        };

        console.log(this);
    }
    render() {
        return (
            <div>
                <Header quantity={this.state.quantity} total={this.state.total} />
                <div className={styles.container}>
                    <ProductListing />
                </div>
            </div>
        );
    }
}

export default App;
