import { GET_POST_SUCCESS, GET_USER_SUCCESS } from "../actions/types";
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
