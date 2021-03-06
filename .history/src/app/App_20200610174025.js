import React, {Component} from 'react';
import Navbar from './components/NavBar';
import Tasks from './components/Tasks';
import Customers from './components/Customers';
import Employees from './components/Employee';
import setState from 'react';

class App extends Component {
  
    constructor(){
        super();
      
      this.state = {
        visibleTask: false,       
        visibleCustomer: false,       
        visibleEmployee: false       
       }; 
       
      }
      TaksChange() {
          
          this.setState({
            visibleTask: true,
            visibleCustomer: false,       
            visibleEmployee: false  
          });
        }
        EmployeeChange() {
          
            this.setState({
              visibleTask: false,
              visibleCustomer: false,       
              visibleEmployee: true  
            });
          }
          CustomerChange() {
          
            this.setState({
              visibleTask: false,
              visibleCustomer: true,       
              visibleEmployee: false  
            });
          }
        

    render() {
  


        return (
    <div>
              
            <nav className="nav-extended light-blue darken-1">
            
              <div class="nav-wrapper">
                <a href="#" class="brand-logo right"> 
                <img width="27%" src="https://static.wixstatic.com/media/8eba7d_59aea826e33145b6bff7fa254b5c2cc5~mv2.jpg/v1/fill/w_622,h_260,al_c,q_80,usm_0.66_1.00_0.01/Logo%20fondo%20blanco.webp"  alt="logo"></img>
                </a>
                
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                  <li><a href="sass.html">Sass</a></li>
                  <li><a href="badges.html">Components</a></li>
                  <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
              </div> 
             
              <div class="nav-wrapper">
                
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li className="tab"><a onClick={()=>{this.CustomerChange()}} href="#test1">Customers</a></li>
                <li className="tab"><a onClick={()=>{this.TaksChange()}} href="#test2">Tasks</a></li>
                <li className="tab"><a onClick={()=>{this.EmployeeChange()}} href="#test3">Employees</a></li>
                </ul>
              </div> 


          </nav>
         




              { this.state.visibleTask == true ? <Tasks/> : null }
              { this.state.visibleEmployee == true ? <Employees/> : null }
              { this.state.visibleCustomer == true ? <Customers/> : null }
          

    </div>
        )
      }
    
      
    }
    

export default App;