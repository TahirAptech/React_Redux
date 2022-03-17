import { combineReducers } from "redux";
import { counterReducer } from './counterReducer';
import { ApisReducer } from './apiReducer';
import { PersonnelReducer } from "./PersonnelReducer";

const rootReducer = combineReducers({
    counterReducer1: counterReducer,
    ApisReducer: ApisReducer,
    PersonnelReducer:PersonnelReducer
});

export default rootReducer;