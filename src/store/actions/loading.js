import { createAction } from "redux-actions";
import { START_LOADING, FINISH_LOADING } from "./types";

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType
);

export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType
);
