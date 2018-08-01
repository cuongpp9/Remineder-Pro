import *as types from "../types/ActionType";

var data = JSON.parse(localStorage.getItem('TastReminder'));
var initialState = data? data:[];
// var initialState = [{
//     id: 1,
//     reminderItem: 'abc'
// }];

var s4 = () =>{
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
}
var randomID = () =>{
    return s4()+ s4() +'_'+s4()+ s4() +'_'+s4()+ s4() +'_'+s4()+ s4();
}

var myReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.LIST_REMINDER:
            return state;

        case types.ADD_REMINDER:
        console.log("Kiem tra Action:",action);
             var newItem = {
                 id: randomID(),
                 reminderItem : action.reminderItem.name,
                 dueDate: action.reminderItem.dueDate
                 //status : action.task.status === 'true'? true:false
             }
             //state.push(newItem);
             //localStorage.setItem('TastReminder', JSON.stringify(state));
             console.log("vao Reducer:",newItem);
            // state.push(newTask);
            // localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
            //console.log("action AA", action);
        default: return state;
    }
};

export default myReducer;