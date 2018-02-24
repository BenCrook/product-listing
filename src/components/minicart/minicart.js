import React, {Component} from 'react';

import styles from './minicart.css';

class Minicart extends Component {
    constructor(props) {
        super(props);

        this.getCartItemQuantity = this.getCartItemQuantity.bind(this);
        this.getCartItemTotal = this.getCartItemTotal.bind(this);
        this.renderProductList = this.renderProductList.bind(this);
    }

    getCartItemQuantity() {
        return this.props.productsInBag.length;
    }

    getCartItemTotal() {
        let cartTotal = 0;

        this.props.productsInBag.forEach(function(product) {
            cartTotal += product.price;
        });

        return cartTotal;
    }

    renderProductList() {
       return this.props.productsInBag.map(function(product, index) {
            return (<div key={index} data-test={index}>
                <span>{product.name}</span>
                <span>£{product.price}</span>
            </div>)
        })
    }

    render() {
        return (
            <div className={styles.minicart}>
                <div className={styles.minicart__summary}>
                    <span className={styles.count}>{this.getCartItemQuantity()} items</span>
                    <span className={styles.total}>£{this.getCartItemTotal()}</span>
                </div>
                <div className={styles.minicart__dropdown}>
                    {this.renderProductList()}
                    <a className={styles.minicart__empty} onClick={this.props.emptyClickEvent}>Empty Cart</a>
                </div>
            </div>
        )
    }
}

export default Minicart;