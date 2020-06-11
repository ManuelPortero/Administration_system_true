import React, {Component} from 'react';
import Calculator from '../Calculadora';
import App from '../../App';


export default class Input extends Component {

    render(){
        return(
            <div className="align-center Input btn-large light-blue darken-4">
                 Answer:{this.props.children}               
            </div>
        )
    }
} 