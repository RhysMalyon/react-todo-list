import React, { Component } from 'react'

import todosData from './data/todoItems';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.setState(prevState => {
      return (
        !prevState.todos.completed
      )
    })
    console.log("Test")
  }

  render() {
    const todosItems = this.state.todos.map(task => {
      return (
        <TodoItem 
          key={task.id}
          text={task.text}
          completed={task.completed}
          onChange={this.handleChange}
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
