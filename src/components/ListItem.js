import React, { Component } from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import * as actions from './../redux/actions/index';

class ListItem extends Component {
    onDeleteItem = () =>{
        //console.log('this.props.ListReminder.id',this.props.ListReminder)
        this.props.onDeleteReminder(this.props.ListReminder.id);
    }
    onEditReminderItem = () =>{
        //console.log("item:",this.props.ListReminder)
       this.props.onEditReminder(this.props.ListReminder);
    }
    render() {
        var {ListReminder} = this.props;
        return (
            <a className="list-group-item list-group-item-action">
                <span  onClick = {this.onEditReminderItem}>{ListReminder.reminderItem}</span><br/>
                <em>{moment(new Date(ListReminder.dueDate)).fromNow()}</em>
                <span onClick ={this.onDeleteItem}>&#x2715;</span>
            </a>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
    }
  }
  const mapDispatchToProps = (dispatch, props)=>{
    return {
      onDeleteReminder: (id) => {
            dispatch(actions.deleteReminder(id));
        },
        onEditReminder: (reminderItem) => {
            dispatch(actions.editReminder(reminderItem));
        }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (ListItem);
