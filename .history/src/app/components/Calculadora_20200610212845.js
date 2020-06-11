import React, {Component} from 'react';
import App from '../App';


        
        var Botones = ["7","8","9","+","4","5","6","-",
        "3","2","1","*","0",".","=","/"];
    
export default class Calculadora extends Component   {

 
 //   constructor(){
 //       super();      
  //    this.state = {
   //     data: this.props.data,
    //    txtSalida:0
      
      // }; 
   // }




    render(){
        
        

        return(
        <div> 
            <div className="col-md-3"></div>
						
				<div id="Calculadora" className="col-md-6">
					   <div className="panel panel-primary" style="margin-top: 10%;">
                            <div className="panel-heading">Calculadora</div>
                                <div className="panel-body">
                                    <div className="col-md-12" style="margin-bottom: 10px;">
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