import { handleActions } from "redux-actions";
import { INCREASE, DECREASE } from "../actions/types";

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
