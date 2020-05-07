import { handleActions } from "redux-actions";
import {
  INCREASE,
  DECREASE,
  INCREASE_ASYNC,
  DECREASE_ASYNC,
} from "../actions/types";
import { increase, decrease } from "../actions/counter";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

function* increaseSage() {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSage() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSage);
  yield takeLatest(DECREASE_ASYNC, decreaseSage);
}

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
