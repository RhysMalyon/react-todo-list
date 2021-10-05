import React, { Component } from 'react'

import todosData from './data/todoItems';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(task => {
        if (task.id === id) {
          task.completed = !task.completed
          console.log(task.completed)
        }
        return task
      })
      return {
        todos: updatedTodos
      }
    })
    
  }

  render() {
    const todosItems = this.state.todos.map(task => <TodoItem key={task.id} task={task} handleChange={this.handleChange}/>)

    return (
      <div className="App">
        {todosItems}
      </div>
    );
  }
}

export default App;
