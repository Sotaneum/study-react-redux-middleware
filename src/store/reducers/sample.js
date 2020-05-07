import {
  GET_POST_SUCCESS,
  GET_USER_SUCCESS,
  GET_POST,
  GET_POST_FAILURE,
  GET_USER,
  GET_USER_FAILURE,
} from "../actions/types";
import { put, call, takeLatest } from "redux-saga/effects";
import { handleActions } from "redux-actions";
import { startLoading, finishLoading } from "../actions/loading";
import * as api from "../../lib/api";

function* getPostSaga(action) {
  yield put(startLoading(GET_POST));
  try {
    const post = yield call(api.getPost, action.payload);
    yield put({
      type: GET_POST_SUCCESS,
      payload: post.data,
    });
  } catch (e) {
    yield put({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GET_POST));
}

function* getUsersSaga() {
  yield put(startLoading(GET_USER));
  try {
    const users = yield call(api.getUsers);
    yield put({
      type: GET_USER_SUCCESS,
      payload: users.data,
    });
  } catch (e) {
    yield put({
      type: GET_USER_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GET_USER));
}

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USER, getUsersSaga);
}

const initialState = {
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),
    [GET_USER_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState
);

export default sample;
