import React, {Component} from 'react';
import Navbar from './components/NavBar';
import Tasks from './components/Tasks';
import Customers from './components/Customers';
import Employees from './components/Employee';
import Calculator from './components/Calculadora';


class App extends Component {
  
    constructor(){
        super();
        
      this.state = {
        visibleTask: false,       
        visibleCustomer: false,       
        visibleEmployee: false,
        visibleCalculator: false,
        result: ""   
       }; 
       
      }

      CalcChange() {
          
        this.setState({
          visibleTask: false,
          visibleCustomer: false, 
          visibleCalculator: true,      
          visibleEmployee: false
        });
      }      



      TaksChange() {
          
          this.setState({
            visibleTask: true,
            visibleCustomer: false, 
            visibleCalculator: false,      
            visibleEmployee: false
          });
        }
        EmployeeChange() {
          
            this.setState({
              visibleTask: false,
              visibleCustomer: false,
              visibleCalculator: false,       
              visibleEmployee: true 
            });
          }
          CustomerChange() {
          
            this.setState({
              visibleTask: false,
              visibleCustomer: true,   
              visibleCalculator: false,    
              visibleEmployee: false
            });
          }
        
        
 



    render() {
  


        return (
    <div>

              <h1 className="center-align"> Administration System</h1>
              <br/>            
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar w/ text</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" onClick={()=>{this.CustomerChange()}} href="#">Customers <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onClick={()=>{this.TaksChange()}} href="#">My Tasks</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" onClick={()=>{this.EmployeeChange()}} href="#">Employees</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" onClick={()=>{this.CalcChange()}} href="#">Calculator</a>
      </li>
    </ul>
    <span class="navbar-text">
    <img className="pt-4 pl-5"width="55%" src="https://ingeproconsultoria.com/wp-content/uploads/2020/02/Imagen1-SIN-FONDO.png"  alt="logo"></img>
    </span>
  </div>
</nav>


              <nav className="nav-extended light-blue darken-4">
            
              
            <div className="nav-wrapper center-align">
            
            <ul  className="right hide-on-med-and-down ">
                
                <li className="tab"><a  href="#test2">     </a></li>
                <li className="tab"><a  href="#test3">Employees</a></li>
                <li className="tab "><a  href="#test4"> Calculator</a></li>
                <li className="tab"><a href="badges.html">Calendar</a></li>
                <li className="tab"><a href="collapsible.html">Get Budget</a></li>
              </ul>

          
            </div>
            
          </nav>
         <br/>
         <br/>
              { this.state.visibleTask == true ? <Tasks/> : null }
              { this.state.visibleEmployee == true ? <Employees/> : null }
              { this.state.visibleCustomer == true ? <Customers/> : null }
              { this.state.visibleCustomer == true ? <Calculator/> : null }


    </div>
        )
      }  
    
      
    }
    

export default App;