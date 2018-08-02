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

var findIndex = (listRemind, id) =>{
    var result = -1;
    listRemind.forEach((reminderItem, index)=>{
        if(reminderItem.id === id){
            result = index;
        }
    });
    return result;
}

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
                  index = findIndex(state, newItem.id);
                  state[index] = newItem;
              }
              else{
                 newItem.id = randomID();
                 state.push(newItem);
              }
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
            index = findIndex(state, id);
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