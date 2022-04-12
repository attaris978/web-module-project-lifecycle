import React from 'react'

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
    return (
              <h1>Hiya</h1>

    )
  }
}
