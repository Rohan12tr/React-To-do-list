import React, { useState } from "react";
import TodoForm from "./TodoForm";
import "../Css/TodoWrapper.css";
import { v4 as uvidv4 } from "uuid";

function TodoWrappers() {
  const [todos, setTodos] = useState([]);
  // add todo
  const addTodo = (data) => {
    setTodos([
      ...todos,{ id: uvidv4(), task: data, completed: false, isEditing: false },
    ]);
  };

  console.log("todos", todos);
  return (
    <div className="todo-wrapper">
      <h1>TodoWrappers</h1>
      <TodoForm addTodo={addTodo} /> 

      {/* display todos */}
      <div className="Todo-list">
        {todos.map((todo)=>(
            <div key={todo.id} className="todo-item"> {todo.task} </div>
          ))}
      </div> 
    </div> 
  );
}

export default TodoWrappers;
