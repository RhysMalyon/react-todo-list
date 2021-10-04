import React from 'react'

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input 
        type="checkbox"
        checked={props.task.completed}
        onChange={() => props.handleChange(props.task.id)} />
      <h2>{props.task.text}</h2>
    </div>
  )
}

export default TodoItem
