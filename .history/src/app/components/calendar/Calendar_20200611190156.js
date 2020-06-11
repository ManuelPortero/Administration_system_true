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

     
 }

 weekdays = moment.weekdays(); 
 weekdaysShort = moment.weekdaysShort();
 months = moment.months();

 year = () => {
     return this.state.dateContext.format("Y");
 }
 month = () => {
    return this.state.dateContext.format("MMMM");
}
daysInMonth = () => {
    return this.state.dateContext.daysInMonth();
}
currentDate = () => {
    console.log("currentDate: ", this.state.dateContext.get("date"));
    return this.state.dateContext.get("date");
}
currentDay = () => {
    return this.state.dateContext.format("D");
}

firstDayOfMonth = () => {
    let dateContext = this.state.dateContext;
    let firstDay = moment(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6
    return firstDay;
}

setMonth = (month) => {
    let monthNo = this.months.indexOf(month);
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("month", monthNo);
    this.setState({
        dateContext: dateContext
    });
}

    render(){
        return(
            <div className="calendar-container" style={this.style}>
            <table className="calendar">
                <thead>
                    <tr className="calendar-header">
                        <td colSpan="5">
                            <this.MonthNav />
                            {" "}
                            <this.YearNav />
                        </td>
                        <td colSpan="2" className="nav-month">
                            <i className="prev fa fa-fw fa-chevron-left"
                                onClick={(e)=> {this.prevMonth()}}>
                            </i>
                            <i className="prev fa fa-fw fa-chevron-right"
                                onClick={(e)=> {this.nextMonth()}}>
                            </i>

                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {weekdays}
                    </tr>
                    {trElems}
                </tbody>
            </table>

        </div>


        );
    }
} 