import React, { Component } from 'react';
import './../CSS/TaskReminder.css';
import FormControl from './FormControl';
import ListItem from './ListItem';
import {connect} from 'react-redux';

class TaskReminder extends Component {
  render() {
    console.log("todos", this.props);
      var {ListReminders} = this.props;
      var elmListReminder = ListReminders.map((ListReminder, index ) => {
          return <ListItem key = {ListReminder.id} index = {index} ListReminder = {ListReminder}/>
      });
    return (
      <div>
          <div className = "TaskReminder">
            <span>Reminder Pro</span>
          </div>
          <FormControl/>
          <div className="list-group">
            {elmListReminder}
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  console.log(state.TastReminders);
  return {
    ListReminders : state.TastReminders
  }
}

export default connect(mapStateToProps, null) (TaskReminder);
