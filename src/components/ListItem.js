import React, { Component } from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import * as actions from './../redux/actions/index';

class ListItem extends Component {
    onDeleteItem = () =>{
        this.props.onDeleteReminder(this.props.ListReminder.id);
    }
    render() {
        var {ListReminder} = this.props;
        return (
            <a href="" className="list-group-item list-group-item-action">
                {ListReminder.reminderItem}<br/>
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
        }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (ListItem);
