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
    }

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
        console.log(resultado); 

    }


 
render() {
    return(
        <div className = "center-align">
           
            <div colSpan="4"><span id="resultado"></span></div>
 
 
                <button className="waves-effect waves-light btn-large" onClick={onclick()} id="siete">7</button>
                <button className="waves-effect waves-light btn-large" onClick={onclick()} id="ocho">8</button>
                <button className="waves-effect waves-light btn-large" onClick={onclick()} id="nueve">9</button>
                <button className="waves-effect waves-light btn-large" onClick={onclick()} id="division">/</button>
 
            <br/><br/>
 
                <button className="waves-effect waves-light btn-large" onClick={onclick()} id="cuatro">4</button>
                <button className="waves-effect waves-light btn-large" onClick={onclick()} id="cinco">5</button>
                <button className="waves-effect waves-light btn-large" onClick={onclick()} id="seis">6</button>
                <button className="waves-effect waves-light btn-large" onClick={onclick()} id="multiplicar">x</button>
 
            <br/><br/>
 
                <button className="waves-effect waves-light btn-large" onClick={onclick()} id="siete">7</button>
                <button className="waves-effect waves-light btn-large" onClick={onclick()} id="ocho">8</button>
                <button className="waves-effect waves-light btn-large" onClick={onclick()} id="nueve">9</button>
                <button className="waves-effect waves-light btn-large" onClick={onclick()} id="division">/</button>
 
            <br/><br/>
 
                <button className="waves-effect waves-light btn-large" onClick={onclick()}  id="uno">1</button>
                <button className="waves-effect waves-light btn-large" onClick={onclick()} id="dos">2</button>
                <button className="waves-effect waves-light btn-large" onClick={onclick()} id="tres">3</button>
                <button className="waves-effect waves-light btn-large" onClick={onclick()} id="resta">-</button>
 
            <br/><br/>
 
                <button  className="waves-effect waves-light btn-large" onClick={onclick()} id="igual">=</button>
                <button  className="waves-effect waves-light btn-large"onClick={onclick()}  id="reset">C</button>
                <button className="waves-effect waves-light btn-large" onClick={onclick()}  id="cero">0</button>
                <button className="waves-effect waves-light btn-large" onClick={onclick()}  id="suma">+</button>
 
            <br/><br/>

        </div>


    )
   
    }
}