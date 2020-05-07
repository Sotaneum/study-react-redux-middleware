import {
  GET_POST_SUCCESS,
  GET_USER_SUCCESS,
  GET_POST,
  GET_USER,
} from "../actions/types";
import { takeLatest } from "redux-saga/effects";
import { handleActions } from "redux-actions";
import * as api from "../../lib/api";
import createRequestSaga from "../../lib/createRequestSaga";

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USER, api.getUsers);

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
