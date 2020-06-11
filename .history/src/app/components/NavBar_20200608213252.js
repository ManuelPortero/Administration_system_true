import React, {Component} from 'react';
import App from '../App';

class Navbar extends Component {
    render () {
        return(      
            <nav class="nav-extended light-blue darken-1">
            <div class="nav-wrapper">
              <a href="#" class="brand-logo">
                <img width="27%" src="https://static.wixstatic.com/media/8eba7d_59aea826e33145b6bff7fa254b5c2cc5~mv2.jpg/v1/fill/w_622,h_260,al_c,q_80,usm_0.66_1.00_0.01/Logo%20fondo%20blanco.webp"  alt="logo"></img>
              </a>
              
              <ul  class="right hide-on-med-and-down">
                <li class="tab"><a href="sass.html">Calculator</a></li>
                <li class="tab"><a href="badges.html">Calendar</a></li>
                <li class="tab"><a href="collapsible.html">Technical Support</a></li>
              </ul>
            </div>
             
            <div class="nav-content">
              <ul class="tabs tabs-transparent">
                <li class="tab"><a href="#test1">Customers</a></li>
                <li class="tab"><a href="#test2">Employees</a></li>
                <li class="tab"><a href="#test3">Tasks</a></li>
              </ul>
            </div>
          </nav>
                
        ) 
   }
  }
  export default NavBar;








    