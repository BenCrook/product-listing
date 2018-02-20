import React, {Component} from 'react';
import styles from './products.css';
import Button from "../../button/button";

class Product extends Component {
    constructor(props) {
        super(props);

        this.addToBag = this.addToBag.bind(this);
    }

    addToBag() {
        this.props.addToBagEvent([{category: 'Category Two',sku: 'PRD4', price: this.props.price, stocked: true, name: this.props.name}]);
    }

    render () {
        return (
            <div className={styles.product}>
                <div>
                    <img className={styles.productImage} src="http://via.placeholder.com/600x600" alt=""/>
                </div>
                <div className={styles.productName}>{this.props.name}</div>
                <div className={styles.productPrice}>{this.props.price}</div>
                <div className={styles.productStock}>{this.props.inStock}</div>
                <Button link={this.addToBag} text="Add To Cart"/>
            </div>
        )
    }
}


export default Product;