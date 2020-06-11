import React, {Component} from 'react';
import App from '../App';

export default class Calculator extends Component   {
render() {
    return(

        <table>
            <tr>
            <td colspan="4"><span id="resultado"></span></td>
            </tr>
            <tr>
                <button className="waves-effect waves-light btn-large" id="siete">7</button>
                <button className="waves-effect waves-light btn-large" id="ocho">8</button>
                <button className="waves-effect waves-light btn-large" id="nueve">9</button>
                <button className="waves-effect waves-light btn-large" id="division">/</button>
            </tr>
            <tr>
                <td><button className="waves-effect waves-light btn-large" id="cuatro">4</button></td>
                <td><button className="waves-effect waves-light btn-large" id="cinco">5</button></td>
                <td><button className="waves-effect waves-light btn-large" id="seis">6</button></td>
                <td><button className="waves-effect waves-light btn-large" id="multiplicar">x</button></td>
            </tr>
            <tr>
                <td><button className="waves-effect waves-light btn-large" id="siete">7</button></td>
                <td><button className="waves-effect waves-light btn-large" id="ocho">8</button></td>
                <td><button className="waves-effect waves-light btn-large" id="nueve">9</button></td>
                <td><button className="waves-effect waves-light btn-large" id="division">/</button></td>
            </tr>
            <tr>
                <td><button className="waves-effect waves-light btn-large"  id="uno">1</button></td>
                <td><button className="waves-effect waves-light btn-large" id="dos">2</button></td>
                <td><button className="waves-effect waves-light btn-large" id="tres">3</button></td>
                <td><button className="waves-effect waves-light btn-large" id="resta">-</button></td>
            </tr>
            <tr>
                <td><button  className="waves-effect waves-light btn-large" id="igual">=</button></td>
                <td><button  className="waves-effect waves-light btn-large" id="reset">C</button></td>
                <td><button className="waves-effect waves-light btn-large"  id="cero">0</button></td>
                <td><button className="waves-effect waves-light btn-large"  id="suma">+</button></td>
            </tr>
        </table>



    )
   
    }
}