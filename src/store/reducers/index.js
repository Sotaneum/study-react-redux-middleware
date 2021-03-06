import counter, { counterSaga } from "./counter";
import { all } from "redux-saga/effects";
import sample, { sampleSaga } from "./sample";
import loading from "./loading";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export function* rootSaga() {
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
