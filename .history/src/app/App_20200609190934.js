import React, {Component} from 'react';
import Navbar from './components/NavBar';
import Tasks from './components/Tasks';
import Customers from './components/Customers';
class App extends Component {

  

    render() {


        return (
    <div>
             <Navbar/>
             <Tasks/>

    </div>
        )
      }
    
      
    }
    

export default App;