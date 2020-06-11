import React, {Component} from 'react';
import App from '../App';
       
export default class Employees extends Component   {
  constructor(){
    super();
  
  this.state = {
      title: '',
      description:'',
      _id:'',
      employees:[]
   }; 
   this.handleChange = this.handleChange.bind(this); 
   this.addEmployee = this.addEmployee.bind(this);
  }
  handleChange(e) {
      const { name, value } = e.target;
      this.setState({
        [name]: value
      });
    }
  
    addEmployee(e) {
      e.preventDefault();
      if(this.state._id) {
        fetch(`/api/employees/${this.state._id}`, {
          method: 'PUT',
          body: JSON.stringify({
            title: this.state.title,
            description: this.state.description
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log('Employee Updated');
            this.setState({_id: '', title: '', description: ''});
            this.fetchEmployees();
          });
      } else {
        fetch('/api/employees', {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            console.log('Employee Saved');
            this.setState({title: '', description: ''});
            this.fetchEmployees();
          })
          .catch(err => console.error(err));
      }
  
    }
  
    deleteEmployee(id) {
      if(confirm('Are you sure you want to delete it?')) {
        fetch(`/api/employees/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            console.log('Employee Deleted');
            this.fetchEmployees();
          });
      }
    }
  editEmployee(id) {
      fetch(`/api/employees/${id}`)
      .then(res => res.json())
      .then(data => {
          console.log(data);
          this.setState({
              title: data.title,
              description: data.description,
              _id: data._id
          });
      });
  } 
   
  componentDidMount(){
      this.fetchEmployees();
  }
  
  fetchEmployees(){
      fetch('/api/employees')
      .then(res=> res.json())
      .then(data => {
          this.setState({employees: data});
          console.log(this.state.employees);
  
      });
  } 


  render () {

      return(     
        
    <div className="container">
            <div className="row">
              <div className="col s5">
                <div className="card">
                  <div className="card-content">
                    <form onSubmit={this.addEmployee}>
                      <div className="row">
                        <div className="input-field col s12">
                          <input name="title" onChange={this.handleChange} value={this.state.title} type="text" placeholder="Employee Title" autoFocus/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <textarea name="description" onChange={this.handleChange} value={this.state.description} cols="30" rows="10" placeholder="Employee Description" className="materialize-textarea"></textarea>
                        </div>
                      </div>
  
                      <button type="submit" className="btn light-blue darken-4">
                        Send 
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col s7">
                <table>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    { 
                      this.state.employees.map(employee => {
                        return (
                          <tr key={employee._id}>
                            <td>{employee.title}</td>
                            <td>{employee.description}</td>
                            <td>
                              <button onClick={() => this.deleteEmployee(employee._id)} className="btn light-blue darken-4">
                                <i className="material-icons">delete</i> 
                              </button>
                              <button onClick={() => this.editEmployee(employee._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
                                <i className="material-icons">edit</i>
                              </button>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
      ) 
 }
}
