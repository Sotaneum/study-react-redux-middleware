import * as api from "../../lib/api";
import { GET_POST, GET_USER } from "./types";
import createRequestThunk from "../../lib/createRequestThunk";

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USER, api.getUsers);
