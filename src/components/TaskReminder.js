import React, { Component } from 'react';
import './../CSS/TaskReminder.css';
import FormControl from './FormControl';
import ListItem from './ListItem';
class TaskReminder extends Component {
  render() {
    return (
      <div>
          <div className = "TaskReminder">
            <span>Reminder Pro</span>
          </div>
          <FormControl/>
          <ListItem/>
      </div>
    );
  }
}
export default TaskReminder;
