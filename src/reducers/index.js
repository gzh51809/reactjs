import {combineReducers} from "redux";
import list from "./list";
import user from "./user";
import details from "./details";

let Reducers = combineReducers({
    list,
    user,
    details
});
export default Reducers;