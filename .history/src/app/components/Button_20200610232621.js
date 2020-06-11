import React, {Component} from 'react';
import Calculator from './Calculadora';
import App from '../App';


export default class Button extends Component {
   isOperator = val => {
      return !isNaN(val) || val === "." || val === "=";
    }; 

    render(){
        return(
            <div 
            className={`button ${this.isOperator
                (this.props.children) ? "" :"operator"}`}
            >  
                {this.props.children}
            </div>
        );
    }
} 