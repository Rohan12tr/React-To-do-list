import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function Todo({task , deleteTodo , toggleComplete , editTodo}) {
  return (
    <div className='list-todo'>
      <p onClick={()=>toggleComplete(task.id)} className={`${task.completed?"completed":"incompleted"} task `}>{task.task} </p>
      <div className='list-icons'>
       <FontAwesomeIcon className='edit-icon' onClick={()=>editTodo(task.id)}  icon={faPenToSquare} />
       <FontAwesomeIcon className='delete-icon' onClick={()=>deleteTodo(task.id)}  icon={faTrash} />
      </div>
    </div>
  )
}

export default Todo
