import React, {Component} from 'react';
import App from '../App';
import Button from './calculadora/Button';
import Input from './calculadora/Input';
import ClearButton from './calculadora/ClearButton';
        
export default class Calculadora extends Component   {
    constructor(props) {
        super(props);

        this.state = {
            input:"",
            previousNumber : "",
            currentNumber :"",
            operator : ""
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
            <Button className= "waves-effect waves-light btn-large btn-success">1</Button>
            <Button className= "waves-effect waves-light btn-large btn-success">2</Button>
            <Button className= "waves-effect waves-light btn-large btn-success">3</Button>
            <Button >+</Button>
            </div>
            
            <div className="row">
            <Button className= "waves-effect waves-light btn-large btn-success">4</Button>
            <Button className= "waves-effect waves-light btn-large btn-success">5</Button>
            <Button className= "waves-effect waves-light btn-large btn-success">6</Button>
            <Button>-</Button>
            </div>
            
            <div className="row">
                <Button handleClick={this.addToInput}>7</Button>
                <Button className= "waves-effect waves-light btn-large btn-success">8</Button>
                <Button className= "waves-effect waves-light btn-large btn-success">9</Button>
                <Button>x</Button>
            </div>
            
            <div className="row">
                <Button className= "waves-effect waves-light btn-large btn-success">.</Button>
                <Button className= "waves-effect waves-light btn-large btn-success">0</Button>
                <Button>=</Button>
                <Button>÷</Button>
            </div>
            
            </div>
    
        );
        

    }
}