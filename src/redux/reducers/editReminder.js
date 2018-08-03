import *as types from "../types/ActionType";

var initialState = {
    id: '',
    name: '',
    dueDate:''
}; 

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.EDIT_REMINDER:
        //console.log("action edit reminder:", action);
            return action.reminderItem; //Lấy Item khi onclickItem
        default: return state;
    }
};

export default myReducer;