import React, { Component } from 'react'

import todosData from './data/todoItems';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super()
    this.state = {
      // Empty for now
    }
  }
  render() {
    return (
      <div className="App">
        <TodoItem />
      </div>
    );
  }
}

export default App;
