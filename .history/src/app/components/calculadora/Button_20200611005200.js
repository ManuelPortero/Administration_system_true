import React, {Component} from 'react';
import Calculator from '../Calculadora';
import App from '../../App';
import "./button.css";

export default class Button extends Component {
   isOperator = val => {
      return !isNaN(val) || val === "." || val === "=";
    }; 

    render(){
        return(
            <div 
            className={`button ${this.isOperator
                (this.props.children) ? "waves-effect waves-light btn-large btn-info col s12 m6 l3" :"operator waves-effect waves-light btn-large btn-success col s12 m6 l3"}`}
                onClick={() => this.props.handleClick
                (this.props.children)}
            >  
                {this.props.children}
            </div>
        )
    }
} 