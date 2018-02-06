import React, {Component} from 'react';
import Filter from './filter/filter.js';
import Product from './products/products.js';

import styles from './product-listing.css';

const productsData = [
    {category: 'Category One',sku: 'PRD1', price: '$49.99', stocked: true, name: 'Football Kit'},
    {category: 'Category One',sku: 'PRD2', price: '$9.99', stocked: true, name: 'Rugby Kit'},
    {category: 'Category One',sku: 'PRD3', price: '$29.99', stocked: false, name: 'Ice Hockey Kit'},
    {category: 'Category Two',sku: 'PRD4', price: '$99.99', stocked: true, name: 'Handball Kit'},
    {category: 'Category Two',sku: 'PRD5', price: '$399.99', stocked: false, name: 'Baseball Kit'},
    {category: 'Category Two',sku: 'PRD6', price: '$199.99', stocked: true, name: 'Wrestling Kit'}
];

class ProductListing extends Component {
    constructor() {
        // Run Component constructor
        super();

        // Set default state
        this.state = {
            filterText: '',
            isFilteredByStock: false
        };

        // Bind functions to ProductListing
        this.getProducts = this.getProducts.bind(this);
        this.checkHandler = this.checkHandler.bind(this);
        this.textHandler = this.textHandler.bind(this);
    }

    getProducts() {
        let products = [];
        productsData.forEach((product) => {
            if (this.state.isFilteredByStock && !product.stocked) {
                return;
            }
            if (!product.name.toLowerCase().includes(this.state.filterText.toLowerCase())) {
                return;
            }
            products.push(<Product key={product.sku} name={product.name} price={product.price} inStock={product.stocked} />);
        });

        return products;
    }

    checkHandler(e) {
        this.setState({isFilteredByStock: e.target.checked});
    }

    textHandler(e) {
        console.dir(e.target.value);
        this.setState({filterText: e.target.value});
    }

    render() {
        return (
            <div>
                <Filter textHandler={this.textHandler} checkHandler={this.checkHandler} inStockOnly={this.state.isFilteredByStock}/>

                <div className={styles.productListing}>
                    {this.getProducts()}
                </div>
            </div>
        )
    }
}

export default ProductListing;