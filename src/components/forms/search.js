import React from 'react';

function Search(props) {
    return <input type="text" placeholder={props.placeholder} value={props.value} />
}

Search.defaultProps = {
    placeholder: 'Search Here...',
    value: ''
}

export default Search;