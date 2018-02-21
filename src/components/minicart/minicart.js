import React, {Component} from 'react';

import styles from './minicart.css';

class Minicart extends Component {
    constructor(props) {
        super(props);
        console.log(this);

        this.getCartItemQuantity = this.getCartItemQuantity.bind(this);
        this.getCartItemTotal = this.getCartItemTotal.bind(this);
        this.cartProducts = this.cartProducts.bind(this);
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

    cartProducts() {
        let markup = ``;
        this.props.productsInBag.forEach(function(product) {
            markup += `<div>${product.name}</div>`;
        });

        return {__html: markup};
    }

    render() {
        return (
            <div className={styles.minicart}>
                <div className="minicart__summary">
                    <span className={styles.count}>{this.getCartItemQuantity()} items</span>
                    <span className={styles.total}>£{this.getCartItemTotal()}</span>
                </div>
                <div className="minicart__products" dangerouslySetInnerHTML={this.cartProducts()} />
                <a onClick={this.props.emptyClickEvent}>Empty</a>
            </div>
        )
    }
}

export default Minicart;