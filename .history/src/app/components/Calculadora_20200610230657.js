import React, {Component} from 'react';
import App from '../App';
import Button from './Button';

        
export default class Calculadora extends Component   {

    render(){
        
        

        return(
            <div className= "pl-5 Calculadora">
            <div>
            <button className="waves-effect waves-light btn-large btn-success">(</button>
            <button className="waves-effect waves-light btn-large btn-danger">CE</button>
            <button className="waves-effect waves-light btn-large btn-success">)</button>
            <button className="waves-effect waves-light btn-large btn-danger">C</button>
            </div>
            <br/>

            <div>
            <button className="waves-effect waves-light btn-large btn-info">1</button>
            <button className="waves-effect waves-light btn-large btn-info">2</button>
            <button className="waves-effect waves-light btn-large btn-info">3</button>
            <button className="waves-effect waves-light btn-large ">+</button>
            </div>
            <br/>
            <div>
            <button className="waves-effect waves-light btn-large btn-info">4</button>
            <button className="waves-effect waves-light btn-large btn-info">5</button>
            <button className="waves-effect waves-light btn-large btn-info">6</button>
            <button className="waves-effect waves-light btn-large ">-</button>
            </div>
            <br/>
            <div>
                <button className="waves-effect waves-light btn-large btn-info">7</button>
                <button className="waves-effect waves-light btn-large btn-info">8</button>
                <button className="waves-effect waves-light btn-large btn-info">9</button>
                <button className="waves-effect waves-light btn-large ">x</button>
            </div>
            <br/>
            <div>
                <button className="waves-effect waves-light btn-large btn-info">.</button>
                <button className="waves-effect waves-light btn-large btn-info">0</button>
                <button className="waves-effect waves-light btn-large btn-success">=</button>
                <button className="waves-effect waves-light btn-large ">÷</button>
            </div>

            </div>
    
        )
        
        


        





    }
}