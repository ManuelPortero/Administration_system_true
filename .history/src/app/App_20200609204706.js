import React, {Component} from 'react';
import Navbar from './components/NavBar';
import Tasks from './components/Tasks';
import Customers from './components/Customers';
import Employees from './components/Employee';


class App extends Component {
    constructor() {
        super()
            this.State 
            {
              HideTasks:false;
              HideEmployee:false;
              HideCustomer:false
            }
      };

      showTasks()
          {
            this.setStates(
              {
                HideTasks:true,
                HideEmployee:false,
                HideCustomer:false
              }
            )
          }
          showCustomers()
          {
            this.setState(
              {
                HideTasks:false,
                HideEmployee:false,
                HideCustomer:true
              }
            )
          }
  
          showEmployees()
          {
            this.setState(
              {
                HideTasks:false,
                HideEmployee:true,
                HideCustomer:false
              }
            )
          }
  
  

    render() {


        return (
    <div>
             <Navbar/>
              
              {
                  if ( HideTasks = true ) {

                    <Tasks/>

                  }

              }
                  
                  
                  
              
             
             {
                  this.state.showCustomers ?
                  <Customers/>
                  :null
              }

              {
                  this.state.showEmployees ?
                  <Employees/>
                  :null
              }

    </div>
        )
      }
    
      
    }
    

export default App;