import React from 'react';
import Checkbox from '../../forms/checkbox';

function StockFilter(props) {
    return (
        <span>
            <label htmlFor="stockFilter">Only show products in stock</label>
            <Checkbox name="stockFilter" id="stockFilter" />
        </span>
    )
}

export default StockFilter;