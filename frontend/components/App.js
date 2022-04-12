import React from 'react'
import Form from './Form';
import TodoList from './TodoList';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data:[]
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(json => this.setState( {
      data: json.data
    } ) )
    .catch(error => console.log(error))
  }

  addToList = (newTodo) => {
    console.log(this.state);
    const existentData = this.state.data;
    fetch(URL, {
      method:'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
    .then(response => response.json())
    .then(json => this.setState( {
      data: [
        ...existentData,
        json.data
      ]
    } ) )
    .catch(error => console.log(error))
  }
  

  render() {
    return ( <>
              <h1>My Undo List</h1>
              
              <Form
              todos={this.state.data}
              addToList={this.addToList} />
              </>
    )
  }
}
