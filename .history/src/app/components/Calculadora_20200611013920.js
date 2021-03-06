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

    addZeroToInput = val => {
        if ( this.state.input !== ""){
            this.setState({ input: this.state.input + val });
        }
    };

    addDecimal = val => {
        if ( this.state.input.indexOf (".") === -1){
            this.setState({ input: this.state.input + val });
        }
    };

    clearInput = () => {
        this.setState({ input:""});
    }

    add = () => {
        this.state.previousNumber = this.state.input;
        this.setState({ input:""});
        this.state.operator ="plus";
    }

    substract = () => {
        this.state.previousNumber = this.state.input;
        this.setState({ input:""});
        this.state.operator ="substract";
    }

    multiply = () => {
        this.state.previousNumber = this.state.input;
        this.setState({ input:""});
        this.state.operator ="multiply";
    }


    evaluation = () => {
        this.state.currentNumber = this.state.input; 

        if(this.state.operator == "plus") {
            this.setState({
                input: parseInt(this.state.previousNumber)+
                parseInt(this.state.currentNumber)

            });
        }

       else if(this.state.operator == "substract") {
            this.setState({
                input: parseInt(this.state.previousNumber)-
                parseInt(this.state.currentNumber)

            });
        }

        else if(this.state.operator == "multiply") {
            this.setState({
                input: parseInt(this.state.previousNumber)*
                parseInt(this.state.currentNumber)

            });
        }
    }
    render(){
        
        return(
         
                
        
        
         <div className =  "pl-5 Calculadora">
            

            <div className="center-align row">
    <div className="col">         
    
    <Input>{this.state.input}</Input>    

    </div>
    </div>


            <div className="row">
            <div className="col">
            
            <div className="row">
            <Button></Button>
            <ClearButton handleClear={this.clearInput}>CE</ClearButton>
            <Button></Button>
            <Button>/</Button>
            </div>
            

            <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
            </div>
            
            <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.substract}>-</Button>
            </div>
            
            <div className="row">
                <Button handleClick={this.addToInput}>7</Button>
                <Button handleClick={this.addToInput}>8</Button>
                <Button handleClick={this.addToInput}>9</Button>
                <Button handleClick={this.multiply}>*</Button>
            </div>
            
            <div className="row">
                <Button handleClick={this.addDecimal}>.</Button>
                <Button handleClick={this.addZeroToInput}>0</Button>
                <Button handleClick={this.evaluation}>=</Button>
                <Button>÷</Button>
            </div>
        </div>        
    </div>





            </div>
                  
        );
        

    }
}