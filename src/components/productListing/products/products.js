import React from 'react';
import styles from './products.css';



function Products(props) {
    const productData = props.productData;

    const productDataList = productData.map(function(product) {
        console.log(product);

        return (
            <div key={product.sku} className={styles.product}>
                <div>
                    <img className={styles.productImage} src="http://via.placeholder.com/600x600" alt=""/>
                </div>
                <div className={styles.productName}>{product.name}</div>
                <div className={styles.productPrice}>{product.price}</div>
                <div className={styles.productStock}>{product.stocked.toString()}</div>
            </div>
        )
    });

    return productDataList;
}

export default Products;