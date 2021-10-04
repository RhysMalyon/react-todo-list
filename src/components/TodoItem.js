import React from 'react'

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox"></input>
      <h2>{props.text}</h2>
    </div>
  )
}

export default TodoItem
