import { combineReducers } from 'redux';
import TastReminders from './TastReminders';
import editReminder from './editReminder';
import FetchApi from './FetchApi';

const myReducer = combineReducers({
    TastReminders, editReminder, FetchApi
});

export default myReducer;
