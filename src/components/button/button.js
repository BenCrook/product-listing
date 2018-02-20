import React, { Component } from 'react';
import cx from "classnames";
import styles from './button.css';

class Button extends Component {
    constructor(props) {
        super();

        this.state = {
            isHovered: false
        };

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter() {
        this.setState({isHovered: true});
    }

    onMouseLeave() {
        this.setState({isHovered: false})
    }

    render() {
        let className = cx(styles.base, {
            [styles.button]: true,
            [styles.red]: this.props.red,
            [styles.large]: this.props.large,
            [styles.secondary]: this.props.secondary,
            [styles.isHovered]: this.state.isHovered
        });

        return (
            <a className={className}
               onClick={this.props.link}
               onMouseEnter={this.onMouseEnter}
               onMouseLeave={this.onMouseLeave}
            >
                {this.props.text}
            </a>
        )
    }
}

export default Button;