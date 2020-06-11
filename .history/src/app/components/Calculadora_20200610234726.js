import React, {Component} from 'react';
import App from '../App';
import button from './Button';

        
export default class Calculadora extends Component   {

    render(){
        
        

        return(
            <div className= "pl-5 Calculadora">
            <div className="row">
            <button className=" waves-effect waves-light btn-large  ">(</button>
            <button className=" waves-effect waves-light btn-large " >CE</button>
            <button className=" waves-effect waves-light btn-large  ">)</button>
            <button className=" waves-effect waves-light btn-large ">C</button>
            </div>
            

            <div className="row">
            <button className=" waves-effect waves-light  btn-large ">1</button>
            <button className=" waves-effect waves-light  btn-large ">2</button>
            <button className="  waves-effect waves-light btn-large ">3</button>
            <button className=" waves-effect waves-light  btn-large ">+</button>
            </div>
            
            <div className="row">
            <button className=" waves-effect waves-light  btn-large ">4</button>
            <button className=" waves-effect waves-light  btn-large ">5</button>
            <button className="  waves-effect waves-light btn-large ">6</button>
            <button className=" waves-effect waves-light  btn-large ">-</button>
            </div>
            
            <div className="row">
                <button className=" waves-effect waves-light  btn-large ">7</button>
                <button className=" waves-effect waves-light  btn-large ">8</button>
                <button className="  waves-effect waves-light btn-large ">9</button>
                <button className=" waves-effect waves-light  btn-large ">x</button>
            </div>
            
            <div className="row">
                <button className=" waves-effect waves-light  btn-large ">.</button>
                <button className=" waves-effect waves-light  btn-large ">0</button>
                <button className="  waves-effect waves-light btn-large ">=</button>
                <button className=" waves-effect waves-light  btn-large ">÷</button>
            </div>

            </div>
    
        );
        

    }
}