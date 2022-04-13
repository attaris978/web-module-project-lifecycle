import React from 'react'

export default class Todo extends React.Component {


  render() {
    return (
      <div
      onClick={() => this.props.toggleCompleted(this.props.id)}>
    <h2>{this.props.name}</h2>
    </div>
    )
  }
}
