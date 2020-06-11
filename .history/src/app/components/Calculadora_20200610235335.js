import React, {Component} from 'react';
import App from '../App';
import Button from './Button';

        
export default class Calculadora extends Component   {

    render(){
        
        

        return(
            <div className= "pl-5 Calculadora">
            <div className="row">
            <Button>(</Button>
            <Button>CE</Button>
            <Button>)</Button>
            <Button>C</Button>
            </div>
            

            <div className="row">
            <Button className=" waves-effect waves-light  btn-large ">1</Button>
            <Button className=" waves-effect waves-light  btn-large ">2</Button>
            <Button className="  waves-effect waves-light btn-large ">3</Button>
            <Button className=" waves-effect waves-light  btn-large ">+</Button>
            </div>
            
            <div className="row">
            <Button className=" waves-effect waves-light  btn-large ">4</Button>
            <Button className=" waves-effect waves-light  btn-large ">5</Button>
            <Button className="  waves-effect waves-light btn-large ">6</Button>
            <Button className=" waves-effect waves-light  btn-large ">-</Button>
            </div>
            
            <div className="row">
                <Button className=" waves-effect waves-light  btn-large ">7</Button>
                <Button className=" waves-effect waves-light  btn-large ">8</Button>
                <Button className="  waves-effect waves-light btn-large ">9</Button>
                <Button className=" waves-effect waves-light  btn-large ">x</Button>
            </div>
            
            <div className="row">
                <Button className=" waves-effect waves-light  btn-large ">.</Button>
                <Button className=" waves-effect waves-light  btn-large ">0</Button>
                <Button className="  waves-effect waves-light btn-large ">=</Button>
                <Button className=" waves-effect waves-light  btn-large ">÷</Button>
            </div>

            </div>
    
        );
        

    }
}