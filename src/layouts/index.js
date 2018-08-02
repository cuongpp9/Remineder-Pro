import React, { Component } from 'react';
import './stype.scss';
import FormControl from './components/FormControl/';
import ListItem from './components/ListItem/';
import {connect} from 'react-redux';
import * as actions from './../redux/actions/index';

class TaskReminder extends Component {

  clearItemReminder= ()=>{
    this.props.onClearAllReminder();
  }

  render() {
    //console.log("todos", this.props);
      var {ListReminders} = this.props;
      var elmListReminder = ListReminders.map((ListReminder, index ) => {
          return <ListItem key = {index} index = {index} ListReminder = {ListReminder}/>
      });
    return (
      <div>
        <div className = "FormReminder">
        <div className = "TaskReminder">
        <span>Reminder Pro</span>
      </div>
      <FormControl/>
      <div className="listItemReminder ">
        {elmListReminder}
      </div>
      <div className="btnClearReminder">
      <button type="submit" className="btn btn-danger mb-2"
        onClick = {this.clearItemReminder}>Clear Reminder</button>
      </div>
      
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  //console.log(state.TastReminders);
  return {
    ListReminders : state.TastReminders
  }
}
const mapDispatchToProps = (dispatch, props)=>{
  return {
    onClearAllReminder: () => {
          dispatch(actions.clearReminder());
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (TaskReminder);
