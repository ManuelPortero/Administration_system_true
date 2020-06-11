import React, {Component} from 'react';
import App from '../App';

export default class Navbar extends Component {
    
   

    render () {
        
        return(      
<nav className="nav-extended light-blue darken-1">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                <img width="27%" src="https://static.wixstatic.com/media/8eba7d_59aea826e33145b6bff7fa254b5c2cc5~mv2.jpg/v1/fill/w_622,h_260,al_c,q_80,usm_0.66_1.00_0.01/Logo%20fondo%20blanco.webp"  alt="logo"></img>
              </a>
              
              <ul  className="right hide-on-med-and-down">
                <li className="tab"><a href="sass.html">Calculator</a></li>
                <li className="tab"><a href="badges.html">Calendar</a></li>
                <li className="tab"><a href="collapsible.html">Technical Support</a></li>
              </ul>
            </div>
             
            <div className="nav-content">
              <ul className="tabs tabs-transparent">
                <li className="tab"><a onClick={()=>{this.CustomerChange()}} href="#test1">Customers</a></li>
                <li className="tab"><a onClick={()=>{this.TaksChange()}} href="#test2">Tasks</a></li>
                <li className="tab"><a onClick={()=>{this.EmployeeChange()}} href="#test3">Employees</a></li>
              </ul>
            </div>
          </nav>
                            
        ) 
   }
  }
 








    