import React from "react";
import TodoList from "./TodoList";
import styled from "styled-components";

const FormWrapper = styled.form``;

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      todoText: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const createNewTodo = () => {
      return {
        name: this.state.todoText,
        completed: false,
      };
    };
    this.props.addToList(createNewTodo());
    this.setState({
      todoText: ""
    });
  };

  handleChange = (e) => {
    this.setState({
      todoText: e.target.value
    })
  }

  render() {
    return (
      <FormWrapper onSubmit={(e) => this.handleSubmit(e)}>
        <TodoList
        todos={this.props.todos} />
        <input
          type="text"
          placeholder="Enter New Todo Item"
          value={this.state.todoText.value}
          onChange={(e) => this.handleChange(e)}
        />
      </FormWrapper>
    );
  }
}
