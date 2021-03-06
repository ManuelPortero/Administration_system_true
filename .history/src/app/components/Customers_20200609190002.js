import React, {Component} from 'react';
import App from '../App';
       
export default class Customers extends Component   {
  constructor(){
    super();
  
  this.state = {
    name : '',
    surname: '',
    telephone: '',
    email: '',
    company: '',
    customers:[]
   }; 
   this.handleChange = this.handleChange.bind(this); 
   this.addCustomer = this.addCustomer.bind(this);
  }
  handleChange(e) {
      const { name, value } = e.target;
      this.setState({
        [name]: value
      });
    }
  
    addCustomer(e) {
      e.preventDefault();
      if(this.state._id) {
        fetch(`/api/customers/${this.state._id}`, {
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
            console.log('Customer Updated');
            this.setState({_id: '', title: '', description: ''});
            this.fetchCustomers();
          });
      } else {
        fetch('/api/customers', {
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
            console.log('Customer Saved');
            this.setState({title: '', description: ''});
            this.fetchCustomers();
          })
          .catch(err => console.error(err));
      }
  
    }
  
    deleteCustomer(id) {
      if(confirm('Are you sure you want to delete it?')) {
        fetch(`/api/customers/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            console.log('Customer Deleted');
            this.fetchCustomers();
          });
      }
    }
  editCustomer(id) {
      fetch(`/api/customers/${id}`)
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
      this.fetchCustomers();
  }
  
  fetchCustomers(){
      fetch('/api/customers')
      .then(res=> res.json())
      .then(data => {
          this.setState({customers: data});
          console.log(this.state.customers);
  
      });
  } 


  render () {

      return(     
        
    <div className="container">
            <div className="row">
              <div className="col s5">
                <div className="card">
                  <div className="card-content">
                    <form onSubmit={this.addCustomer}>
                      <div className="row">
                        <div className="input-field col s12">
                          <input name="title" onChange={this.handleChange} value={this.state.title} type="text" placeholder="Customer Title" autoFocus/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <textarea name="description" onChange={this.handleChange} value={this.state.description} cols="30" rows="10" placeholder="Customer Description" className="materialize-textarea"></textarea>
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
                      this.state.customers.map(customer => {
                        return (
                          <tr key={customer._id}>
                            <td>{customer.title}</td>
                            <td>{customer.description}</td>
                            <td>
                              <button onClick={() => this.deleteCustomer(customer._id)} className="btn light-blue darken-4">
                                <i className="material-icons">delete</i> 
                              </button>
                              <button onClick={() => this.editCustomer(customer._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
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
