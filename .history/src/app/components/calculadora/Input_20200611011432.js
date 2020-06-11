import React, {Component} from 'react';
import Calculator from '../Calculadora';
import App from '../../App';


export default class Input extends Component {

    render(){
        return(
            <div className="Input btn-large light-blue darken-4">
                    {this.props.children}               
            </div>
        )
    }
} 