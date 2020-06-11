import React, {Component} from 'react';
import Calculator from './Calculadora';
import App from '../App';


export default class Button extends Component {
   // isOperator = val => {
     //   return !isNaN(val) || val === "." || val === "=";
   // }; 

    render(){
        return(
            <div className ="Calculadora">
     
                {this.props.children}
            </div>
        );
    }
}
   //     className={`button ${this.isOperator
     //       (this.props.children)? "" :"btn-danger"}`}
     //       >
    