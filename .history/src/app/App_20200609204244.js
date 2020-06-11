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
            this.setState(
              {
                HideTasks:true,
                HideEmployee:false,
                HideCustomer:false
              }
            )
          }
          showCustomer()
          {
            this.setState(
              {
                HideTasks:false,
                HideEmployee:false,
                HideCustomer:true
              }
            )
          }
  
          showEmployee()
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
                  this.state.showTasks ?
                  <Tasks/>
                  :null
              }
             
             {
                  this.state.showCustomers ?
                  <Customers/>
                  :null
              }

              {
                  this.state.showEmployee ?
                  <Employees/>
                  :null
              }

    </div>
        )
      }
    
      
    }
    

export default App;