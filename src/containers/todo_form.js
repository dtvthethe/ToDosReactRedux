import React, { Component } from "react";
import { connect } from "react-redux";
import { add, update } from "../actions";

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _name: "",
      _age: 0,
    };
  }

  showSelected() {
    if (this.props.todoDetail) {
      console.log("set state");
      this.setState({
        _name: this.props.todoDetail.name,
        _age: this.props.todoDetail.age,
      });
    }
    // this.setState({
    //   _name: "",
    //   _age: 0,
    // });
  }

  render() {
    return (
      <div>
        Name:
        <input type="text" ref="txtTodo" />
        <br />
        Age:<input type="number" min="0" max="1000" ref="txtAge" />
        <br />
        <input type="hidden" ref="hidIndex" value="4" />
        <button
          onClick={() => {
            this.props.addToDo({
              name: this.refs.txtTodo.value,
              age: this.refs.txtAge.value,
            });
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            this.props.updateToDo(4, {
              name: this.refs.txtTodo.value,
              age: this.refs.txtAge.value,
            });
          }}
        >
          Update
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todoDetail: state.todo.detail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: todo => dispatch(add(todo)),
    updateToDo: (index, todo) => dispatch(update(index, todo)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
