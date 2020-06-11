import React, {Component} from 'react';
import App from '../App';
//Variable declaration for all the functions
var operandoa; 
var operandob;
var operacion;

export default class Calculator extends Component   {
        
    primera(){
        resultado.textContent = resultado.textContent + "1";
    }

    segunda() {
        resultado.textContent = resultado.textContent + "2";
    }

    tercera() {
        resultado.textContent = resultado.textContent + "3";
    }

     cuarta() {
        resultado.textContent = resultado.textContent + "4";
    }

    quinta() {
        resultado.textContent = resultado.textContent + "5";
    }

    sexta() {
        resultado.textContent = resultado.textContent + "6";
    }

    septima() {
        resultado.textContent = resultado.textContent + "7";
    }

    octava(){
        resultado.textContent = resultado.textContent + "8";
    }

    novena() {
        resultado.textContent = resultado.textContent + "9";
    }

    cero() {
        resultado.textContent = resultado.textContent + "0";
    }

    reset() {
        resetear();
    }
    
    suma() {
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar(); 
    }

    resta(){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar(); 
    }

    multiplicacion() {
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar(); 
    }

    division() {
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar(); 
    }

    igual() {
        operandob = resultado.textContent;
        resolver(); 
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
 
 
                <button className="waves-effect waves-light btn-large" onClick={this.septima()} id="siete">7</button>
                <button className="waves-effect waves-light btn-large" onClick={octava()} id="ocho">8</button>
                <button className="waves-effect waves-light btn-large" onClick={novena()} id="nueve">9</button>
                <button className="waves-effect waves-light btn-large" onClick={division()} id="division">/</button>
 
            <br/><br/>
 
                <button className="waves-effect waves-light btn-large" onClick={cuarta()} id="cuatro">4</button>
                <button className="waves-effect waves-light btn-large" onClick={quinta()} id="cinco">5</button>
                <button className="waves-effect waves-light btn-large" onClick={sexta()} id="seis">6</button>
                <button className="waves-effect waves-light btn-large" onClick={multiplicacion()} id="multiplicar">x</button>
 
            <br/><br/>
 
                <button className="waves-effect waves-light btn-large" onClick={primera()}  id="uno">1</button>
                <button className="waves-effect waves-light btn-large" onClick={segunda()} id="dos">2</button>
                <button className="waves-effect waves-light btn-large" onClick={tercera()} id="tres">3</button>
                <button className="waves-effect waves-light btn-large" onClick={resta()} id="resta">-</button>
 
            <br/><br/>
 
                <button  className="waves-effect waves-light btn-large" onClick={igual()} id="igual">=</button>
                <button  className="waves-effect waves-light btn-large"onClick={reset()}  id="reset">C</button>
                <button className="waves-effect waves-light btn-large" onClick={cero()}  id="cero">0</button>
                <button className="waves-effect waves-light btn-large" onClick={suma()}  id="suma">+</button>
 
            <br/><br/>

        </div>


    )
   
    }
}