import * as api from "../../lib/api";
import {
  GET_POST,
  GET_USER,
  GET_POST_SUCCESS,
  GET_USER_SUCCESS,
  GET_POST_FAILURE,
  GET_USER_FAILURE,
} from "./types";

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST });
  try {
    const response = await api.getPost(id);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

export const getUsers = (id) => async (dispatch) => {
  dispatch({ type: GET_USER });
  try {
    const response = await api.getUsers(id);
    dispatch({
      type: GET_USER_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_USER_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};
