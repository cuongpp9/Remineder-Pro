import *as types from '../types'

export const listReminder = () =>{
    return {
        type: types.LIST_REMINDER
    }
}

export const addReminder = (text) =>{
    const action = {
        type: ADD_REMINDER,
        text,
    }
    //console.log('action in Reminder', action);
    return action;
}

export const deleteReminder = (id) =>{
    const action = {
        type: DELETE_REMINDER,
        id
    }
    //console.log('delete in Reminder', action);
    return action;
}