import React, { Component } from "react";
import "./List.css";

class List extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      input: ""
    };
  }

  addTodo() {
    var newList = this.state.todos.slice();
    newList.push(this.state.input);
    this.setState({ todos: newList });
  }

  render() {
    const { todos } = this.state;
    const todosList = todos.map((todo, ind) => {
      return <li key={ind}> {todo} </li>;
    });
    return (
      <div>
        <input
          onChange={e => this.setState({ input: e.target.value })}
          placeholder="Input new todo"
        />
        <button
          onClick={() => {
            this.addTodo();
          }}
        >
          Come at me bro!
        </button>
        <br />
        {todosList.length ? todosList : "Please add stuff to todo list"}
      </div>
    );
  }
}

export default List;
