import React, {Component} from 'react';
import Calculator from '../Calculadora';
import App from '../../App';


export default class ClearButton extends Component {

    render(){
        return(
            <div className="clear-btn waves-effect waves-light btn-large btn-danger col">
                    {this.props.children}               
            </div>
        )
    }
} 