import { combineReducers } from 'redux';
import event from "./event";
import admin from "./admin";

export default combineReducers({
    event,
    admin,
})