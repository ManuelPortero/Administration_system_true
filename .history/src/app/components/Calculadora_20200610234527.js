import React, {Component} from 'react';
import App from '../App';
import Button from './Button';

        
export default class Calculadora extends Component   {

    render(){
        
        

        return(
            <div className= "pl-5 Calculadora">
            <div className="row">
            <Button className=" waves-effect waves-light btn-large  ">(</Button>
            <Button className=" waves-effect waves-light btn-large " >CE</Button>
            <Button className=" waves-effect waves-light btn-large  ">)</Button>
            <Button className=" waves-effect waves-light btn-large ">C</Button>
            </div>
            

            <div className="row">
            <Button className=" waves-effect waves-light  btn-large btn-info">1</Button>
            <Button className=" waves-effect waves-light  btn-large btn-info">2</Button>
            <Button className="  waves-effect waves-light btn-large btn-info">3</Button>
            <Button className=" waves-effect waves-light  btn-large ">+</Button>
            </div>
            
            <div className="row">
            <Button className=" waves-effect waves-light  btn-large btn-info">4</Button>
            <Button className=" waves-effect waves-light  btn-large btn-info">5</Button>
            <Button className="  waves-effect waves-light btn-large btn-info">6</Button>
            <Button className=" waves-effect waves-light  btn-large ">-</Button>
            </div>
            
            <div className="row">
                <Button className=" waves-effect waves-light  btn-large btn-info">7</Button>
                <Button className=" waves-effect waves-light  btn-large btn-info">8</Button>
                <Button className="  waves-effect waves-light btn-large btn-info">9</Button>
                <Button className=" waves-effect waves-light  btn-large ">x</Button>
            </div>
            
            <div className="row">
                <Button className=" waves-effect waves-light  btn-large btn-info">.</Button>
                <Button className=" waves-effect waves-light  btn-large btn-info">0</Button>
                <Button className="  waves-effect waves-light btn-large btn-success">=</Button>
                <Button className=" waves-effect waves-light  btn-large ">÷</Button>
            </div>

            </div>
    
        );
        

    }
}