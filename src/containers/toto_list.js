import React, { Component } from "react";
import { connect } from "react-redux";
import { remove, select } from "../actions";

class ToDoList extends Component {
  renderToDoList() {
    return this.props.todos.map((item, index) => {
      return (
        <li
          key={index}
          onClick={() => {
            this.props.toggle(index);
          }}
        >
          Name: {item.name} -- Age: [{item.age}]
          <button
            onClick={() => {
              this.props.del(index);
            }}
          >
            X
          </button>
        </li>
      );
    });
  }

  render() {
    return <ol>{this.renderToDoList()}</ol>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    todos: state.todo.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    del: index => dispatch(remove(index)),
    toggle: index => dispatch(select(index)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
