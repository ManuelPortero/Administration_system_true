import React from 'react';

class Navbar extends React.Component {
    render () {
        return(      
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
        ) 
   }
  }
  export default NavBar;








    render() {
return(
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


    }
}

export default Navbar; 