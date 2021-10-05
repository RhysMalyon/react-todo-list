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

    let taskCount = 0;

    const completedTasks = this.state.todos.forEach(task => {
      if(task.completed) {
        taskCount += 1
      }
      return taskCount
    })

    const taskDisplay = this.state.todos.length === completedTasks ?
                        "You can relax! Well done!" :
                        `${this.state.todos.length} more tasks to go!`

    return (
      <div className="container__todo text-center">
        <h3 className="mb-3">{taskDisplay}</h3>
        {todosItems}
      </div>
    );
  }
}

export default App;
