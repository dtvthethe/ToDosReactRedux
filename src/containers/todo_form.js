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

  componentDidUpdate(previousProps){
    if(previousProps.todoDetail !== this.props.todoDetail) {
      if (this.props.todoDetail){
        this.setState({
          _name: this.props.todoDetail.name,
          _age: this.props.todoDetail.age,
        });
        // return;
      }
      else{
        this.setState({
          _name: "",
          _age: 0,
        });
        // return;
      }
    }
  }


  render() {
    // this.showSelected();
    return (
      <div>
        Name:
        <input type="text" ref="txtTodo" value={this.state._name} onChange={(ev)=>{this.setState({_name: ev.target.value})}}/>
        <br />
        Age:<input type="number" min="0" max="1000" ref="txtAge" value={this.state._age} onChange={(ev)=>{this.setState({_age: ev.target.value})}}/>
        <br />
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
            this.props.updateToDo(this.props.index, {
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
    index: state.todo.index,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: todo => dispatch(add(todo)),
    updateToDo: (index, todo) => dispatch(update(index, todo)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
