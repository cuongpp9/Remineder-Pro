import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        var {ListReminder} = this.props;
        return (
                <a href="" className="list-group-item list-group-item-action">{ListReminder.reminderItem}</a>
        );
    }
}


export default ListItem;
