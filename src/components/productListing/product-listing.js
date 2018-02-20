import React, {Component} from 'react';
import Filter from './filter/filter.js';
import Product from './products/products.js';

import styles from './product-listing.css';

class ProductListing extends Component {
    constructor(props) {
        // Run Component constructor
        super(props);

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
        this.props.products.forEach((product) => {
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