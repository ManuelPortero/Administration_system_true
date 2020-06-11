import React, {Component} from 'react';
import App from '../App';

export default class Calculator extends Component   {

    calcular (){
        //Variable declaration
        var resultado = document.getElementById("resultado");
        var reset = document.getElementById("reset");
        var suma = document.getElementById("suma");
        var resta = document.getElementById("resta");
        var multiplicacion = document.getElementById("multiplicacion");
        var division = document.getElementById("division");
        var igual = document.getElementById("igual");
        var resultado = document.getElementById("resultado");
        var uno = document.getElementById("uno");
        var dos = document.getElementById("dos");
        var tres = document.getElementById("tres");
        var cuatro = document.getElementById("cuatro");
        var cinco = document.getElementById("cinco");
        var seis = document.getElementById("seis");
        var siete = document.getElementById("siete");
        var ocho = document.getElementById("ocho");
        var nueve = document.getElementById("nueve");
        var cero = document.getElementById("cero");
        
        //Events

        uno.onclick = function (e) {
            resultado.TextContent = resultado.TextContent + "1";
        }

        dos.onclick = function (e) {
            resultado.TextContent = resultado.TextContent + "2";
        }

        tres.onclick = function (e) {
            resultado.TextContent = resultado.TextContent + "3";
        }

        cuatro.onclick = function (e) {
            resultado.TextContent = resultado.TextContent + "4";
        }

        cinco.onclick = function (e) {
            resultado.TextContent = resultado.TextContent + "5";
        }

        seis.onclick = function (e) {
            resultado.TextContent = resultado.TextContent + "6";
        }

        siete.onclick = function (e) {
            resultado.TextContent = resultado.TextContent + "7";
        }

        ocho.onclick = function (e) {
            resultado.TextContent = resultado.TextContent + "8";
        }

        nueve.onclick = function (e) {
            resultado.TextContent = resultado.TextContent + "9";
        }

        cero.onclick = function (e) {
            resultado.TextContent = resultado.TextContent + "0";
        }

    }

render() {
    return(
        <div className = "center-align">
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
            <br/><br/>
            <tr>
                <button className="waves-effect waves-light btn-large" id="cuatro">4</button>
                <button className="waves-effect waves-light btn-large" id="cinco">5</button>
                <button className="waves-effect waves-light btn-large" id="seis">6</button>
                <button className="waves-effect waves-light btn-large" id="multiplicar">x</button>
            </tr>
            <br/><br/>
            <tr>
                <button className="waves-effect waves-light btn-large" id="siete">7</button>
                <button className="waves-effect waves-light btn-large" id="ocho">8</button>
                <button className="waves-effect waves-light btn-large" id="nueve">9</button>
                <button className="waves-effect waves-light btn-large" id="division">/</button>
            </tr>
            <br/><br/>
            <tr>
                <button className="waves-effect waves-light btn-large"  id="uno">1</button>
                <button className="waves-effect waves-light btn-large" id="dos">2</button>
                <button className="waves-effect waves-light btn-large" id="tres">3</button>
                <button className="waves-effect waves-light btn-large" id="resta">-</button>
            </tr>
            <br/><br/>
            <tr>
                <button  className="waves-effect waves-light btn-large" id="igual">=</button>
                <button  className="waves-effect waves-light btn-large" id="reset">C</button>
                <button className="waves-effect waves-light btn-large"  id="cero">0</button>
                <button className="waves-effect waves-light btn-large"  id="suma">+</button>
            </tr>
            <br/><br/>
        </table>
        </div>


    )
   
    }
}