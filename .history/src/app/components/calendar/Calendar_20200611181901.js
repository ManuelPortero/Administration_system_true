import React, {Component} from 'react';
import moment from 'moment';
import App from '../../App';

export default class Calendar extends Component {
 constructor (props) {
     super(props);
     this.width = props.width || "350px";
     this.style= props.style || {};

     this.state = {
         momentContext : moment(),
         today : moment(),
         showMonthPopup: false,
         showYearPopup: false
     }

     weekdays = moment.weekdays(); 
     weekdaysShort = moment.weekdaysShort();
     months = moment.months();
 }
    render(){
        return(
<div className="calendar-container">
    
    <h2>Calendar</h2>
</div>
        );
    }
} 