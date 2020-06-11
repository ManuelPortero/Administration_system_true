import React, {Component} from 'react';
import App from '../App';
//Variable declaration for all the functions
var operandoa; 
var operandob;
var operacion;

export default class Calculator extends Component   {
        
    calcular (){
 
        
        //Variable declaration for calcular()
        
  
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
            resultado.textContent = resultado.textContent + "1";
        }

        dos.onclick = function (e) {
            resultado.textContent = resultado.textContent + "2";
        }

        tres.onclick = function (e) {
            resultado.textContent = resultado.textContent + "3";
        }

        cuatro.onclick = function (e) {
            resultado.textContent = resultado.textContent + "4";
        }

        cinco.onclick = function (e) {
            resultado.textContent = resultado.textContent + "5";
        }

        seis.onclick = function (e) {
            resultado.textContent = resultado.textContent + "6";
        }

        siete.onclick = function (e) {
            resultado.textContent = resultado.textContent + "7";
        }

        ocho.onclick = function (e) {
            resultado.textContent = resultado.textContent + "8";
        }

        nueve.onclick = function (e) {
            resultado.textContent = resultado.textContent + "9";
        }

        cero.onclick = function (e) {
            resultado.textContent = resultado.textContent + "0";
        }

        reset.onclick = function (e) {
            resetear();
        }

        suma.onclick = function (e) {
            operandoa = resultado.textContent;
            operacion = "+";
            limpiar(); 
        }

        resta.onclick = function (e) {
            operandoa = resultado.textContent;
            operacion = "-";
            limpiar(); 
        }

        multiplicacion.onclick = function (e) {
            operandoa = resultado.textContent;
            operacion = "+";
            limpiar(); 
        }

        division.onclick = function (e) {
            operandoa = resultado.textContent;
            operacion = "/";
            limpiar(); 
        }

        igual.onclick = function (e) {
            operandob = resultado.textContent;
            resolver(); 
        }

        

    }
    
    limpiar() {
        resultado.textContent="";
    }

    resetear(){
        resultado.textContent ="";
        operandoa = 0;
        operandob = 0;
        operacion = "";


    resolver () {
        var res = 0; 
        switch (operacion){
            case "+":
             res = parseFloat(operandoa) + parseFloat(operandob);
             break;
            case "-":
             res = parseFloat(operandoa) - parseFloat(operandob);
             break;
            case "*":
             res = parseFloat(operandoa) * parseFloat(operandob);
             break;
            case "/":
             res = parseFloat(operandoa) / parseFloat(operandob);
             break;

        }
        resetear();
        resultado.textContent = res;
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