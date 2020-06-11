import React, {Component} from 'react';

class App extends Component {

constructor(){
super();

this.state = {
    title: '',
    description:'',
    _id:'',
    tasks:[]
 }; 
 this.handleChange = this.handleChange.bind(this); 
 this.addTask = this.addTask.bind(this);
}
handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  addTask(e) {
    e.preventDefault();
    if(this.state._id) {
      fetch(`/api/tasks/${this.state._id}`, {
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
          console.log('Task Updated');
          this.setState({_id: '', title: '', description: ''});
          this.fetchTasks();
        });
    } else {
      fetch('/api/tasks', {
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
          console.log('Task Saved');
          this.setState({title: '', description: ''});
          this.fetchTasks();
        })
        .catch(err => console.error(err));
    }

  }

  deleteTask(id) {
    if(confirm('Are you sure you want to delete it?')) {
      fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          console.log('Task Deleted');
          this.fetchTasks();
        });
    }
  }
editTask(id) {
    fetch(`/api/tasks/${id}`)
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
    this.fetchTasks();
}

fetchTasks(){
    fetch('/api/tasks')
    .then(res=> res.json())
    .then(data => {
        this.setState({tasks: data});
        console.log(this.state.tasks);

    });
} 

    render() {


        return (

 <div>
 <nav class="nav-extended light-blue darken-1">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">
        <img width="27%" src="https://static.wixstatic.com/media/8eba7d_59aea826e33145b6bff7fa254b5c2cc5~mv2.jpg/v1/fill/w_622,h_260,al_c,q_80,usm_0.66_1.00_0.01/Logo%20fondo%20blanco.webp"  alt="logo"></img>
      </a>
      
      <ul  class="right hide-on-med-and-down">
        <li class="tab"><a href="sass.html">Calculator</a></li>
        <li class="tab"><a href="badges.html">Calendar</a></li>
        <li class="tab"><a href="collapsible.html">Technical Support</a></li>
      </ul>
    </div>
    
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><a href="#test1">Customers</a></li>
        <li class="tab"><a href="#test2">Employees</a></li>
        <li class="tab"><a href="#test3">Tasks</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">JavaScript</a></li>
  </ul>


 <br/>
 <Tasks/>
       
  </div>
        )
      }
    
      
    }
    

export default App;