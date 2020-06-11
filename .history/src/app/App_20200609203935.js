import React, {Component} from 'react';
import Navbar from './components/NavBar';
import Tasks from './components/Tasks';
import Customers from './components/Customers';
import Employees from './components/Employee';


class App extends Component {

  

    render() {


        return (
    <div>
             <Navbar/>
              {
                  this.state.showTasks ?
                  <Tasks/>
                  :null
              }
             
             <Customers/>
             <Employees/>

    </div>
        )
      }
    
      
    }
    

export default App;