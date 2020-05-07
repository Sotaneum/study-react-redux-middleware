import counter from "./counter";
import sample from "./sample";
import loading from "./loading";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export default rootReducer;
