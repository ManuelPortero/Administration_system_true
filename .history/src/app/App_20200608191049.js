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
    render() {


        return (
          <div>
            {/* MAIN NAVIGATION */}
        <nav>
          <div class="nav-wrapper light-blue darken-4">
            <a href="#" class="brand-logo light-blue darken-4">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>


              {/* SIDE NAVIGATION */}

              <nav> <!-- navbar content here  --> </nav>

<ul id="slide-out" class="sidenav">
  <li><div class="user-view">
    <div class="background">
      <img src="images/office.jpg">
    </div>
    <a href="#user"><img class="circle" src="images/yuna.jpg"></a>
    <a href="#name"><span class="white-text name">John Doe</span></a>
    <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
  </div></li>
  <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
  <li><a href="#!">Second Link</a></li>
  <li><div class="divider"></div></li>
  <li><a class="subheader">Subheader</a></li>
  <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
</ul>
<a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>


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