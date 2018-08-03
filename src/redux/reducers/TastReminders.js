import *as types from "../types/ActionType";
import * as utility from '../utility';

var data = JSON.parse(localStorage.getItem('TastReminder'));
var initialState = data? data:[];

var myReducer = (state = initialState, action) =>{
    var index = -1;
    switch(action.type){
        case types.LIST_REMINDER:
            return [...state];

        case types.SAVE_REMINDER:
            //console.log("Kiem tra Action:",action.reminderItem.id);
             var newItem = {
                 id: action.reminderItem.id,
                 reminderItem : action.reminderItem.name,
                 dueDate: action.reminderItem.dueDate
                 //status : action.task.status === 'true'? true:false
             }
            if(newItem.id){
                  index = utility.findIDReminder(state, newItem.id);
                  state[index] = newItem;
              }
              else{
                 newItem.id = utility.randomIDReminder();
                 state.push(newItem);
              }
              console.log("newItem",newItem);
            //newItem.id = randomID();
            //state.push(newItem);
             localStorage.setItem('TastReminder', JSON.stringify(state));
             //console.log("vao Reducer:",newItem);
            //state.push(newTask);
            //localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.DELETE_REMINDER:
            //console.log("Kiem tra Action:",action);
            var id = action.id;
            index = utility.findIDReminder(state, id);
            state.splice(index, 1);
            localStorage.setItem('TastReminder', JSON.stringify(state));
            //console.log("vao Reducer:",newItem);
            //localStorage.removeItem("TastReminder");
        //state.push(newTask);
        //localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        
        case types.CLEAR_REMINDER:
            //console.log("Da vao Clerar", action.reminderItem);
            state =[];
            localStorage.removeItem("TastReminder");
            // var id = action.id;
            // var index = findIndex(state, id);
            // state.splice(index, 1);
            // localStorage.setItem('TastReminder', JSON.stringify(state));
            // console.log("vao Reducer:",newItem);
            // //localStorage.removeItem("TastReminder");
            // //state.push(newTask);
            // //localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        default: return state;
    }
};

export default myReducer;