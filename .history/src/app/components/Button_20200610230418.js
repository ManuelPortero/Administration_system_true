import React, {Component} from 'react';
import './Button.css';

export default class Button extends Component {
    isOperator = val => {
        return !isNaN(val) || val === "." || val === "=";
    }; 

    render(){
        return(
            <div 
            className={`button ${this.isOperator
            (this.props.children)? "" :"btn-danger"}`}
            >
                {this.props.children}
            </div>
        )
    }
}