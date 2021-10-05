import React from 'react'

function TodoItem(props) {
  const completedStyle = props.task.completed ? "item__completed" : ""
  
  return (
    <div className="todo-item">
      <input 
        type="checkbox"
        checked={props.task.completed}
        onChange={() => props.handleChange(props.task.id)} />
      <p className={completedStyle}>{props.task.text}</p>
    </div>
  )
}

export default TodoItem
