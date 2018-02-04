import React, {Component} from 'react';
import Filter from './filter/filter.js';
import Products from './products/products.js';

import styles from './product-listing.css';

const products = [
    {category: 'Category One',sku: 'PRD1', price: '$49.99', stocked: true, name: 'Product One'},
    {category: 'Category One',sku: 'PRD2', price: '$9.99', stocked: true, name: 'Product Two'},
    {category: 'Category One',sku: 'PRD3', price: '$29.99', stocked: false, name: 'Product Three'},
    {category: 'Category Two',sku: 'PRD4', price: '$99.99', stocked: true, name: 'Product Four'},
    {category: 'Category Two',sku: 'PRD5', price: '$399.99', stocked: false, name: 'Product Five'},
    {category: 'Category Two',sku: 'PRD6', price: '$199.99', stocked: true, name: 'Product Six'}
];

class ProductListing extends Component {
    constructor() {
        super();

        this.state = {
            filterText: '',
            isFilteredByStock: false
        }
    }

    render() {
        return (
            <div>
                <Filter />

                <div className={styles.productListing}>
                    <Products productData={products} />
                </div>
            </div>
        )
    }
}

export default ProductListing;