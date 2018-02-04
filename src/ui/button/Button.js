import React, { Component } from 'react';
import styles from './Button.css';

class Button extends Component {
    render() {
        return (
            <a className={this.props.modifier} href={this.props.link}>{this.props.text}</a>
        )
    }
}

export default Button;