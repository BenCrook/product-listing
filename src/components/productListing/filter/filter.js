import React, {Component} from 'react';

class Filter extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Search term" onChange={this.props.textHandler} />
                <input type="checkbox" checked={this.props.inStockOnly} onChange={this.props.checkHandler} />
            </div>
        )
    }
}

export default Filter;