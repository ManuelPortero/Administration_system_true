import React, {Component} from 'react';
import Navbar from './components/wellcome';
import Tasks from './components/Tasks';
import Customers from './components/Customers';
import Employees from './components/Employee';
import Calculator from './components/Calculadora';
import Calendar from './components/calendar/Calendar';

class App extends Component {
  
    constructor(){ 
        super();
        
      this.state = {
        visibleTask: false,       
        visibleCustomer: false,       
        visibleEmployee: false,
        visibleCalculator: false,
        visibleCalendar: false,
        visibleRefresh:true,
        result: ""   
       }; 
       
      }

      refresh() {
        this.setState({
          visibleRefresh:true,
          visibleTask: false,
          visibleCustomer: false, 
          visibleCalculator: false,    
          visibleCalendar: false,
          visibleEmployee: false

        });
      }    
      CalcChange() {
        this.setState({
          visibleRefresh:false,
          visibleTask: false,
          visibleCustomer: false, 
          visibleCalculator: true,    
          visibleCalendar: false,
          visibleEmployee: false
        });
      }      


      CalendarChange() {
        this.setState({
          visibleRefresh:false,
          visibleTask: false,
          visibleCustomer: false, 
          visibleCalculator: false,
          visibleCalendar: true,    
          visibleEmployee: false
        });
      }      


      TaksChange() {
          
          this.setState({
            visibleRefresh:false,
            visibleTask: true,
            visibleCustomer: false, 
            visibleCalculator: false,      
            visibleCalendar: false,
            visibleEmployee: false
          });
        }
        EmployeeChange() {
          
            this.setState({
              visibleRefresh:false,
              visibleTask: false,
              visibleCustomer: false,
              visibleCalculator: false,       
              visibleCalendar: false,
              visibleEmployee: true 
            });
          }
          CustomerChange() {
          
            this.setState({
              visibleRefresh:false,
              visibleTask: false,
              visibleCustomer: true,   
              visibleCalculator: false,    
              visibleCalendar: false,
              visibleEmployee: false
            });
          }
        
        
 



    render() {
  


        return (
    <div>
              <nav className="nav-extended light-blue darken-4">
            
              <a href="#" className="brand-logo">
                <img  onClick={()=>{this.refresh()}} href="/"className="pt-4 pl-5"width="55%" src="https://ingeproconsultoria.com/wp-content/uploads/2020/02/Imagen1-SIN-FONDO.png"  alt="logo"></img>
              </a>
            <br/>
              <h1 className="center-align"> Administration System</h1>
              
            <div className="nav-wrapper center-align">
            
            <ul  className="right hide-on-med-and-down ">
                <li className="tab "><a onClick={()=>{this.CustomerChange()}} href="#"> Customers</a></li>
                <li className="tab"><a onClick={()=>{this.TaksChange()}} href="#"> My Tasks    </a></li>
                <li className="tab"><a onClick={()=>{this.EmployeeChange()}} href="#">Employees</a></li>
                <li className="tab"><a onClick={()=>{this.CalcChange()}} href="#"> Calculator</a></li>
                <li className="tab"><a onClick={()=>{this.CalendarChange()}} href="#">Calendar</a></li>
                
              </ul>

 


          
            </div>
            
          </nav>
         <br/>
         <br/>
              { this.state.visibleTask == true ? <Tasks/> : null }
              { this.state.visibleEmployee == true ? <Employees/> : null }
              { this.state.visibleCustomer == true ? <Customers/> : null }
              { this.state.visibleCalculator == true ? <Calculator/> : null }
              { this.state.visibleCalendar == true ? <Calendar/> : null }
              { this.state.visibleRefresh == true ? <Wellcome/> : null }
                
    </div>
        )
      }  
    
      
    }
    

export default App;