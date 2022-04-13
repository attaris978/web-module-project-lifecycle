import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
constructor() {
  super();
}
  
  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return(
          <Todo
          name={todo.name}
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          toggleCompleted={this.props.toggleCompleted} />
          )
        })}
                        
      </div>
    );
  }
}
