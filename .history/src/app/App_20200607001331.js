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
    fetch('/api/tasks/${this.state_id'), {
        method:'PUT',
        body: JSON.stringify({
            title: this.state.title,
            description: this.state.description
        }),
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    }
  }

}

}




