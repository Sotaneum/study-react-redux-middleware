import { GET_POST, GET_USER } from "./types";
import { createAction } from "redux-actions";

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USER);
