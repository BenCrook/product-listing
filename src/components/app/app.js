import React, { Component } from 'react';
import styles from './app.css';
import Header from '../header/header.js';
import ProductListing from '../productListing/product-listing.js';

const productsData = [
    {category: 'Category One',sku: 'PRD1', price: 49.99, stocked: true, name: 'Football Kit'},
    {category: 'Category One',sku: 'PRD2', price: 9.99, stocked: true, name: 'Rugby Kit'},
    {category: 'Category One',sku: 'PRD3', price: 29.99, stocked: false, name: 'Ice Hockey Kit'},
    {category: 'Category Two',sku: 'PRD4', price: 99.99, stocked: true, name: 'Handball Kit'},
    {category: 'Category Two',sku: 'PRD5', price: 399.99, stocked: false, name: 'Baseball Kit'},
    {category: 'Category Two',sku: 'PRD6', price: 199.99, stocked: true, name: 'Wrestling Kit'}
];

class App extends Component {
    constructor() {
        super();

        this.state = {
            quantity: 0,
            total: 0,
            productsInBag: []
        };

        this.addToBag = this.addToBag.bind(this);
        this.emptyBag = this.emptyBag.bind(this);
    }

    addToBag(product) {
        console.log(product);
        this.setState({
            productsInBag: this.state.productsInBag.concat([product])
        });
    }

    emptyBag() {
        this.setState({
            productsInBag: []
        });
    }

    render() {
        return (
            <div>
                <Header emptyClickEvent={this.emptyBag} quantity={this.state.quantity} total={this.state.total} productsInBag={this.state.productsInBag} />
                <div className={styles.container}>
                    <ProductListing addToBagEvent={this.addToBag} products={productsData} />
                </div>
                <h2 onClick={this.addToBag}>Click me</h2>
            </div>
        );
    }
}

export default App;
