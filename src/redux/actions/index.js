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