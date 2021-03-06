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
          window.M.toast({html: 'Task Updated'});
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
          window.M.toast({html: 'Task Saved'});
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
          M.toast({html: 'Task deleted'});
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
$(".dropdown-trigger").dropdown();

    render() {


        return (

          <div>
            {/* MAIN NAVIGATION */}
            <nav class="nav-extended">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><a href="#test1">Test 1</a></li>
        <li class="tab"><a class="active" href="#test2">Test 2</a></li>
        <li class="tab disabled"><a href="#test3">Disabled Tab</a></li>
        <li class="tab"><a href="#test4">Test 4</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">JavaScript</a></li>
  </ul>

  <div id="test1" class="col s12">Test 1</div>
  <div id="test2" class="col s12">Test 2</div>
  <div id="test3" class="col s12">Test 3</div>
  <div id="test4" class="col s12">Test 4</div>




            <div className="container">
              <div className="row">
                <div className="col s5">
                  <div className="card">
                    <div className="card-content">
                      <form onSubmit={this.addTask}>
                        <div className="row">
                          <div className="input-field col s12">
                            <input name="title" onChange={this.handleChange} value={this.state.title} type="text" placeholder="Task Title" autoFocus/>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <textarea name="description" onChange={this.handleChange} value={this.state.description} cols="30" rows="10" placeholder="Task Description" className="materialize-textarea"></textarea>
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
                        this.state.tasks.map(task => {
                          return (
                            <tr key={task._id}>
                              <td>{task.title}</td>
                              <td>{task.description}</td>
                              <td>
                                <button onClick={() => this.deleteTask(task._id)} className="btn light-blue darken-4">
                                  <i className="material-icons">delete</i> 
                                </button>
                                <button onClick={() => this.editTask(task._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
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
    
          </div>
        )
      }
    
      
    }
    

export default App;