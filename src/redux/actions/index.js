import *as types from '../types/ActionType'

export const listAllReminder = () =>{
    return {
        type: types.LIST_REMINDER
    }
}

export const addReminder = (reminderItem) =>{
  return {
      type: types.ADD_REMINDER,
      reminderItem //task:task
  }
}

export const deleteReminder = (id) =>{
    return {
        type: types.DELETE_REMINDER,
        id //task:task
    }
}

export const clearReminder = () =>{
    return {
        type: types.CLEAR_REMINDER
    }
  }