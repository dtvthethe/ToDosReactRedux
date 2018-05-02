import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { myReducer } from "./reducers";
import ToDoComponent from "./components/todo_com";

const myStore = createStore(myReducer);

render(
  <Provider store={myStore}>
    <ToDoComponent />
  </Provider>,
  document.getElementById("root")
);
