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
        visibleEmployee: false,
        result: ""       
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
        
          constructor(){
            super();
    
            this.state = {
                
            }
        }
    
        onClick = button => {
    
            if(button === "="){
                this.calculate()
            }
    
            else if(button === "C"){
                this.reset()
            }
            else if(button === "CE"){
                this.backspace()
            }
    
            else {
                this.setState({
                    result: this.state.result + button
                })
            }
        };
    
    
        calculate = () => {
            var checkResult = ''
            if(this.state.result.includes('--')){
                checkResult = this.state.result.replace('--','+')
            }
    
            else {
                checkResult = this.state.result
            }
    
            try {
                this.setState({
                    // eslint-disable-next-line
                    result: (eval(checkResult) || "" ) + ""
                })
            } catch (e) {
                this.setState({
                    result: "error"
                })
    
            }
        };
    
        reset = () => {
            this.setState({
                result: ""
            })
        };
    
        backspace = () => {
            this.setState({
                result: this.state.result.slice(0, -1)
            })
        };


    render() {
  


        return (
    <div>
              <nav className="nav-extended light-blue darken-4">
            
              <a href="#" className="brand-logo">
                <img class="pt-4 pl-5"width="55%" src="https://ingeproconsultoria.com/wp-content/uploads/2020/02/Imagen1-SIN-FONDO.png"  alt="logo"></img>
              </a>
            <br/>
              <h1 class="center-align"> Administration System</h1>
              
            <div className="nav-wrapper center-align">
            
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
         <br/>
         <br/>
              { this.state.visibleTask == true ? <Tasks/> : null }
              { this.state.visibleEmployee == true ? <Employees/> : null }
              { this.state.visibleCustomer == true ? <Customers/> : null }
              

    </div>
        )
      }
    
      
    }
    

export default App;