import React, { Component } from "react";
import ToDoForm from "../containers/todo_form";
import ToDoList from "../containers/toto_list";

class ToDoComponent extends Component {
  render() {
    return (
      <div>
        <h3>Halu</h3>
        <ToDoForm />
        <hr />
        <ToDoList />
      </div>
    );
  }
}

export default ToDoComponent;
