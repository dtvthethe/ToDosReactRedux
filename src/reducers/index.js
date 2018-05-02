import { combineReducers } from "redux";
import { todoReducer } from "./todo";

export const myReducer = combineReducers({
  todo: todoReducer,
});
