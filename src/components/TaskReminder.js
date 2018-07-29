import React, { Component } from 'react';
import './../CSS/TaskReminder.css';
import Form from './Form';
class TaskReminder extends Component {
  render() {
    return (
      <div>
          <div className = "TaskReminder">
            <span>Reminder Pro</span>
          </div>
          <Form/>
      </div>
    );
  }
}

export default TaskReminder;
