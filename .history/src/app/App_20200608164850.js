import React, {Componenet} from 'react';

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

handleChange (e){

    const {name, value} = e.target;
    this.setState({
        [name]: value
    });
  }

addTask (e) {
  e.preventDefault(); 
  if(this.state._id){
    fetch(`/api/tasks/${this.state_id}`, {
        method:'PUT',
        body: JSON.stringify({
            title: this.state.title,
            description: this.state.description
        }),
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    })
    .then(res =>res.json())
    .then(data => {
        console.log('Task Updated');
        this.setState({_id:'',title:'',description: ''});
        this.fecthTasks();
    });
  } else {
      fetch('/api/tasks',{
          method :'POST',
          body: JSON.stringify(this.state),
          headers:{
              'Accept':'applicacion/json',
              'Content-type': 'application/json'
          }
      })
      .then(res=> res.json())
      .then (data => {
        console.log(data); 
        console.log('Task Saved');
        this.setState({title: '', description: ''});
        this.fetchTasks(); 
      })
      .catch(err => console.error(err));
    }

  }

  deleteTask(id) {
      id(confirm('Are you sure you want to delete ?')) {
          fetch(`/api/tasks/${id}`, {
              method: 'DELETE',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
          })
          .then(res=> res.json())
          .then(data=> {
              console.log(data);
              console.log('Task deleted');
              this.fecthTasks();
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


}




