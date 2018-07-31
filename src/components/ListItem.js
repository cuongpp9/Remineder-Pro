import React, { Component } from 'C:/Users/cuong.pham/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import {connect} from 'react-redux';

class ListItem extends Component {
    render() {
        console.log(this.props.todos);
        return (
            <div className="list-group">
                <a href="" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                <a href="" className="list-group-item list-group-item-action">Morbi leo risus</a>
                <a href="" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        todos : state.ListReminder,
    }
}

export default connect(mapStateToProps, null) (ListItem);
