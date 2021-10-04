import React, { Component } from 'react'

import todosData from './data/todoItems';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
  }
  render() {
    const todosItems = this.state.todos.map(task => {
      return (
        <TodoItem 
          key={task.id}
          text={task.text}
        />
      )
    })

    return (
      <div className="App">
        {todosItems}
      </div>
    );
  }
}

export default App;
