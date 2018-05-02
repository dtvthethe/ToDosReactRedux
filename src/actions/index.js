import { ADD, REMOVE, UPDATE, SELECT, ALL } from "./actionType";

export function add(todo) {
  return {
    type: ADD,
    payload: todo,
  };
}

export function remove(index) {
  return {
    type: REMOVE,
    payload: index,
  };
}

export function update(index, todo) {
  return {
    type: UPDATE,
    payload: todo,
    index: index,
  };
}

export function select(index) {
  return {
    type: SELECT,
    payload: index,
  };
}

export function all() {
  return {
    type: ALL,
  };
}
