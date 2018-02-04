import React, { Component } from 'react';
import styles from './App.css';
import Header from './components/header/header.js';
import ProductListing from './components/productListing/product-listing.js';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className={styles.container}>
                    <ProductListing />
                </div>
            </div>
        );
    }
}

export default App;
