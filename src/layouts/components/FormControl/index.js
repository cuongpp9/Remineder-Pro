import React, { Component } from 'react';
import * as actions from './../../../redux/actions';
import { connect } from 'react-redux';
import './stype.scss';

class FormControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dueDate: '',
      isUpdate: false
    }
  }

  onHandChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }

  onHandleSubmit = (event) => {
    //console.log("asasdasd",this.state);
    event.preventDefault();
    this.props.onSaveReminder(this.state);
    this.setState({
      isUpdate: false,
    })
    this.onClear();
    // this.props.onAddTask(this.state)
  }
  //  componentWillMount(){
  //    if(this.props.itemReminderOnSelect&& this.props.itemReminderOnSelect.id !== null){
  //      this.setState({
  //        id: this.props.itemReminderOnSelect.id,
  //        name: this.props.itemReminderOnSelect.reminderItem,
  //        dueDate: this.props.itemReminderOnSelect.dueDate,
  //        isUpdate: false,
  //      });
  //    }
  //    else{
  //      this.onClear();
  //    }
  // }

  componentWillReceiveProps(newProps) {
    if (newProps && newProps.itemReminderOnSelect.id !== null) {
      this.setState({
        id: newProps.itemReminderOnSelect.id,
        name: newProps.itemReminderOnSelect.reminderItem,
        dueDate: newProps.itemReminderOnSelect.dueDate,
        isUpdate: true
      });
    }
    else {
      this.onClear()
    }
  }
  onClear = () => {
    this.setState({
      id: '',
      name: '',
      dueDate: '',
      isUpdate: false,
    })
  }

  render() {
    return (
      <div className="Control">
        <form className="form-inline" onSubmit={this.onHandleSubmit}>
          <div className="form-group mb-2">
            <input className="form-control" type="text"
              placeholder="I have to..."
              name="name"
              value={this.state.name}
              onChange={this.onHandChange}
              required />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <input className="form-control"
              type="datetime-local"
              value={this.state.dueDate}
              onChange={this.onHandChange}
              name="dueDate"
              required />
          </div>
          <button type="submit"
            className={this.state.isUpdate === true ? "btn btn-primary mb-2" : "btn btn-success mb-2"}>
            {this.state.isUpdate === true ? 'Update Reminder' : 'Add Reminder'}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemReminderOnSelect: state.editReminder //Call props when selecting ItemReminder
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveReminder: (reminderItem) => {
      dispatch(actions.saveReminder(reminderItem));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormControl);
