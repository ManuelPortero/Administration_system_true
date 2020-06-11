import React, {Component} from 'react';
import Calculator from '../Calculadora';
import App from '../../App';


export default class ClearButton extends Component {

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