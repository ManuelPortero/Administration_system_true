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
                <td><button id="siete">7</button></td>
                <td><button id="ocho">8</button></td>
                <td><button id="nueve">9</button></td>
                <td><button id="division">/</button></td>
            </tr>
            <tr>
                <td><button id="cuatro">4</button></td>
                <td><button id="cinco">5</button></td>
                <td><button id="seis">6</button></td>
                <td><button id="multiplicar">x</button></td>
            </tr>
            <tr>
                <td><button id="siete">7</button></td>
                <td><button id="ocho">8</button></td>
                <td><button id="nueve">9</button></td>
                <td><button id="division">/</button></td>
            </tr>
            <tr>
                <td><button id="uno">1</button></td>
                <td><button id="dos">2</button></td>
                <td><button id="tres">3</button></td>
                <td><button id="resta">-</button></td>
            </tr>
            <tr>
                <td><button id="igual">=</button></td>
                <td><button id="reset">C</button></td>
                <td><button id="cero">0</button></td>
                <td><button id="suma">+</button></td>
            </tr>
        </table>



    )

        
    
    }
}