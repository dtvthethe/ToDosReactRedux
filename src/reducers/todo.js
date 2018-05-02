import { ADD, REMOVE, UPDATE, SELECT, ALL } from "../actions/actionType";
import { todos } from "../api";

export function todoReducer(state = todos(), action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case REMOVE:
      return {
        list: state.list.filter((item, index) => {
          if (index !== action.payload) {
            return item;
          }
        }),
      };
    case UPDATE:
      console.log(action);
      return {
        list: state.list.map((item, index) => {
          if (index === action.index) {
            item = action.payload;
          }
        }),
      };
    case SELECT:
      return {
        list: state.list,
        detail: state.list[action.payload],
      };
    case ALL:
      return {
        list: state,
      };
    default:
      return {
        list: state,
      };
  }
}
