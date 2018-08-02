import React, { Component } from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import './stype.scss';
import * as actions from './../../../redux/actions/index';

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
            <a className="list-group-item list-group-item-action itemReminder"
            onClick = {this.onEditReminderItem}>
                <span>{ListReminder.reminderItem}</span>
                <span className="deleteItem" onClick ={this.onDeleteItem}>&#x2715;</span><br/>
                <em>{moment(new Date(ListReminder.dueDate)).fromNow()}</em>
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
