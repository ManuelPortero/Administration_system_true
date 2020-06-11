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
              <Navbar/>
              { this.state.visibleTask == true ? <Tasks/> : null }
              { this.state.visibleEmployee == true ? <Employees/> : null }
              { this.state.visibleCustomer == true ? <Customers/> : null }
          

    </div>
        )
      }
    
      
    }
    

export default App;