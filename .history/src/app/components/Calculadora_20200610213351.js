import React, {Component} from 'react';
import App from '../App';


        
        var Botones = ["7","8","9","+","4","5","6","-",
        "3","2","1","*","0",".","=","/"];
        var data;  
export default class Calculadora extends Component   {

 
    constructor(){
       super();      
     this.state = {
      data: this.props.data,
     txtSalida:0
      
     }; 
    }

    EvaluaColores(it) {
        var nombreClase='primary';
        var signos = ["+", "-", "*", "/"];
        if(signos.indexOf(it)>-1){nombreClase='success';}
        if(it=='='){nombreClase='warning';}
        return nombreClase;
    }
    
    BorrarPantalla (){
      this.setState({txtSalida:0});
    }

    EvaluarBotones(itemPresionado){

        var signos = ["+", "-", "*", "/"];
        
          if(itemPresionado=='='){
            this.setState({txtSalida:eval(this.state.txtSalida)});

          }else{
            if((this.state.txtSalida==0)){
              if(signos.indexOf(itemPresionado)>-1){this.setState({txtSalida:0});}
              else{this.setState({txtSalida:itemPresionado});}
            }else{
              this.setState({txtSalida:this.state.txtSalida+itemPresionado});
            } 
          }
				
			}

    render(){
        
        

        return(
        <div> 
            <div className="col-md-3"></div>
						
				<div id="Calculadora" className="col-md-6">
					   <div className="panel panel-primary mt-1">
                            <div className="panel-heading">Calculadora</div>
                                <div className="panel-body">
                                    <div className="col-md-12 mb-1">
                                        <div id="idCalculadora"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
				<div className="col-md-3"></div>
		</div>
    
        )
        
    }
}