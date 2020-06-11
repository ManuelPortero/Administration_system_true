import React, {Component} from 'react';
import App from '../App';
import Button from './calculadora/Button';
import Input from './calculadora/Input';
import ClearButton from './calculadora/ClearButton';
        
export default class Calculadora extends Component   {
    constructor() {
        super();

        this.state = {
            input:"",
            previousNumber = "",
            currentNumber ="",
            operator = ""
        }; 
    }

    addToInput = val => {
        this.setState({ input: this.state.input + val });
    };

    render(){
        
        return(
            <div className =  "pl-5 Calculadora">
            <div className="row">
        <Input>{this.state.input}</Input>    
            </div>    
            <div className="row">
            <Button>(</Button>
            <ClearButton>CE</ClearButton>
            <Button>)</Button>
            <Button> </Button>
            </div>
            

            <div className="row">
            <Button >1</Button>
            <Button >2</Button>
            <Button >3</Button>
            <Button >+</Button>
            </div>
            
            <div className="row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>-</Button>
            </div>
            
            <div className="row">
                <Button handleClick={this.addToInput}>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button>x</Button>
            </div>
            
            <div className="row">
                <Button>.</Button>
                <Button>0</Button>
                <Button>=</Button>
                <Button>÷</Button>
            </div>
            
            </div>
    
        );
        

    }
}