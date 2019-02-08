import {combineReducers} from "redux";
import list from "./list";
import user from "./user";

let Reducers = combineReducers({
    list,
    user
});
export default Reducers;