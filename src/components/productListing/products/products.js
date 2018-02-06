import React from 'react';
import styles from './products.css';

function Product(props) {
    return (
        <div className={styles.product}>
            <div>
                <img className={styles.productImage} src="http://via.placeholder.com/600x600" alt=""/>
            </div>
            <div className={styles.productName}>{props.name}</div>
            <div className={styles.productPrice}>{props.price}</div>
            <div className={styles.productStock}>{props.inStock}</div>
        </div>
    )
}


export default Product;