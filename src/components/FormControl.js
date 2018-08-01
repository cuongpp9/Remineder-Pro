import React, { Component } from 'react';
import * as actions from './../redux/actions/index';
import {connect} from 'react-redux';

class FormControl extends Component {
  constructor(props){
    super(props);
    this.state = {
     name: '',
     dueDate: '',
    }
  }

  onHandChange = (event) =>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  
}

  onHandleSubmit = (event) =>{
    console.log("asasdasd",this.state);
    event.preventDefault();
    this.props.onAddReminder(this.state);
    // this.props.onAddTask(this.state)
}


  render() {
    return (
      <div className="Control">
        <form className="form-inline" onSubmit = {this.onHandleSubmit}>
          <div className="form-group mb-2">
            <label htmlFor="staticEmail2" className="sr-only">Email</label>
            <input className="form-control" type="text" 
            placeholder="I have to..." 
            name = "name"
            value = {this.state.name}
            onChange = {this.onHandChange}
            />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <input className="form-control" type="datetime-local"
            value = {this.state.dueDate}
            onChange = {this.onHandChange}
            name = "dueDate"
            />
          </div>
          <button type="submit" className="btn btn-success mb-2">Add Reminder</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{

  }
}
const mapDispatchToProps = (dispatch, props)=>{
  return {
    onAddReminder: (reminderItem) => {
          dispatch(actions.addReminder(reminderItem));
      }
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (FormControl);
