import { combineReducers } from "redux";
import skillsReducer from "./skillsReducer";
import projectReducer from "./projectReducer";

const allReducers = combineReducers({
    skillsReducer,projectReducer
})
export default allReducers;