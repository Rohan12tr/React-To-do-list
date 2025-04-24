import React from 'react'
import "../Css/TodoWrapper.css"

function TodoWrappers() {
  return (
    <div> 
      <div className="todo-wrapper">
      <h1>TodoWrappers</h1>
      <input type="text" placeholder="Add a task." className="todo-input" />
    </div>
    </div>
  ) 
}

export default TodoWrappers
