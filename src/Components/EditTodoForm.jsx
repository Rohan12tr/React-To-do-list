import React, { useState } from 'react'


function EditTodoForm({editTask , task}) {

const [value,setValue] = useState(task.task)

const handleSubmit = (e)=>{
    e.preventDefault();
    editTask(value,task.id)
}
    
  return (
    <div>
      <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task..."
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
    </div>
  )
} 

export default EditTodoForm
