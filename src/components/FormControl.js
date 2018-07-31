import React, { Component } from 'react';

class FormControl extends Component {
  render() {
    return (
      <div className="Control">
        <form className="form-inline">
          <div className="form-group mb-2">
            <label htmlFor="staticEmail2" className="sr-only">Email</label>
            <input className="form-control" type="text" placeholder="I have to..." />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="inputPassword2" className="sr-only">Password</label>
            <input className="form-control" type="datetime-local" />
          </div>
          <button type="submit" className="btn btn-success mb-2">Add Reminder</button>
        </form>
      </div>
    );
  }
}

export default FormControl;
