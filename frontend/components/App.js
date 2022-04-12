import React from 'react'
import Form from './Form';

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
  render() {
    return ( <>
              <h1>Hiya</h1>
              <Form todos={this.state.data} />
              </>
    )
  }
}
