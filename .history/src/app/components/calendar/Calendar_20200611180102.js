import React, {Component} from 'react';
import moment from 'moment';
import App from '../../App';


export default class Calendar extends Component {
 constructor (props) {
     super(props);
     this.width = props.width || "350px";
     this.style= props.style || {};
 }
    render(){
        return(
<div className="calendar-container">
    <h2>Calendar</h2>
</div>
        );
    }
} 