import React, {Component} from 'react';
import App from '../../App';


export default class Calendar extends Component {

    render(){
        return(
            <div className="clear-btn waves-effec8t waves-light btn btn-danger col mr-4"
              onClick={() => this.props.handleClear()}
            >
                    {this.props.children}               
            </div>
        )
    }
} 