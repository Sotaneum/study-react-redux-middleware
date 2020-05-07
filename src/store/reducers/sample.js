import {
  GET_POST,
  GET_USER,
  GET_POST_SUCCESS,
  GET_USER_SUCCESS,
  GET_POST_FAILURE,
  GET_USER_FAILURE,
} from "../actions/types";
import { handleActions } from "redux-actions";

const initialState = {
  loading: {
    GET_POST: false,
    GET_USER: false,
  },
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: true,
      },
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
      },
      post: action.payload,
    }),
    [GET_POST_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
      },
    }),
    [GET_USER]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: true,
      },
    }),
    [GET_USER_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
      },
      users: action.payload,
    }),
    [GET_USER_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
      },
    }),
  },
  initialState
);

export default sample;
