import { combineReducers } from 'redux';
import TastReminders from './TastReminders';
import editReminder from './editReminder';

const myReducer = combineReducers({
    TastReminders, editReminder,
});

export default myReducer;
