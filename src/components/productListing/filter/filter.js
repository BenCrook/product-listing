import React from 'react';
import Search from '../../forms/search.js';
import StockFilter from './stockFilter.js';

function Filter(props) {
    return (
        <div>
            <Search />
            <StockFilter />
        </div>
    )
}

export default Filter;