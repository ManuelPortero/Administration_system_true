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
            
             
            <div className="nav-wrapper center-align">
            <a href="#" className="brand-logo">
                <img width="45%" src="https://static.wixstatic.com/media/8eba7d_59aea826e33145b6bff7fa254b5c2cc5~mv2.jpg/v1/fill/w_622,h_260,al_c,q_80,usm_0.66_1.00_0.01/Logo%20fondo%20blanco.webp"  alt="logo"></img>
              </a>
            
              <h1 class="center-align"> Administration System</h1>
            <ul  className="right hide-on-med-and-down ">
                <li className="tab "><a onClick={()=>{this.CustomerChange()}} href="#test1"> Customers</a></li>
                <li className="tab"><a onClick={()=>{this.TaksChange()}} href="#test2"> My Tasks    </a></li>
                <li className="tab"><a onClick={()=>{this.EmployeeChange()}} href="#test3">Employees</a></li>
                <li className="tab"><a href="sass.html">Calculator</a></li>
                <li className="tab"><a href="badges.html">Calendar</a></li>
                <li className="tab"><a href="collapsible.html">Get Budget</a></li>
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