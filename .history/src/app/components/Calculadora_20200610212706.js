import React, {Component} from 'react';

import App from '../App';


        
        var Botones = ["7","8","9","+","4","5","6","-",
        "3","2","1","*","0",".","=","/"];
    
export default class Calculadora extends Component   {


    constructor(){
        super();
      
      this.state = {
        data: this.props.data,
        txtSalida:0
      
       }; 
    }




    render(){
        
        

        return(
        <div> 
            <div class="col-md-3"></div>
						
				<div id="Calculadora" class="col-md-6">
					   <div class="panel panel-primary" style="margin-top: 10%;">
                            <div class="panel-heading">Calculadora</div>
                                <div class="panel-body">
                                    <div class="col-md-12" style="margin-bottom: 10px;">
                                        <div id="idCalculadora"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
				<div class="col-md-3"></div>
		</div>
    
        )
        
    }
}