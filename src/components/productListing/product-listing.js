import React, {Component} from 'react';

import Button from "../button/button";
import Filter from './filter/filter.js';

import styles from './product-listing.css';
import stylesProduct from './products.css';

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
        this.addToBag = this.addToBag.bind(this);
        this.productHtml = this.productHtml.bind(this);
        this.getProducts = this.getProducts.bind(this);
        this.checkHandler = this.checkHandler.bind(this);
        this.textHandler = this.textHandler.bind(this);
    }

    addToBag(product) {
        this.props.addToBagEvent({price: product.price, stocked: product.stocked, name: product.name});
    }

    productHtml(index, product) {
        return (
            <div key={index} className={stylesProduct.product}>
                <div>
                    <img className={stylesProduct.productImage} src="http://via.placeholder.com/600x600" alt=""/>
                </div>
                <div className={stylesProduct.productName}>{product.name}</div>
                <div className={stylesProduct.productPrice}>{product.price}</div>
                <div className={stylesProduct.productStock}>{product.stocked}</div>
                <Button link={() => this.addToBag(product)} text="Add To Cart"/>
            </div>
        )
    }

    getProducts() {
        let products = [];


        this.props.products.map((product, index) => {
            if (this.state.isFilteredByStock && !product.stocked) {
                return false;
            }

            if (!product.name.toLowerCase().includes(this.state.filterText.toLowerCase())) {
                return false;
            }

            products.push(this.productHtml(index, product));

            return (<div key={index} data-test={index}>
                <span>{product.name}</span>
                <span>£{product.price}</span>
            </div>)
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
                    <h2 onClick={this.props.addToBagEvent}>Product Listing</h2>
                </div>
            </div>
        )
    }
}

export default ProductListing;