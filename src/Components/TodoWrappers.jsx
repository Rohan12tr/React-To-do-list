import React, { useState } from "react";
import TodoForm from "./TodoForm";
import "../Css/TodoWrapper.css";
// import { v4 as uvidv4 } from "uuid";
import EditTodoForm from "./EditTodoForm";
import Todo from "./Todo";

function TodoWrappers() {
  const uniqueId = new Date().toISOString ();
  const [todos, setTodos] = useState([]);

  // add todo
  const addTodo = (data) => {
    setTodos([
      ...todos,
      { id: uniqueId, task: data, completed: false, isEditing: false },
    ]);
  };

  // delete todo
  const deleteTodo = (id)=>{
    return(
      setTodos(todos.filter((todo)=> todo.id != id))
    )
  }

  // toggel complete todo
  const toggleComplete = (id)=>{
    return(
      setTodos(
        todos.map((todo)=>{
          return(
            todo.id ===id ? {...todo,completed:!todo.completed}:todo
          )
        })
      )
    )
  }


//  enable edit todo
  const editTodo = (id)=>{
     setTodos(
      todos.map((todo)=>{
        return(
          todo.id ===id?{...todo,isEditing:!todo.isEditing}:todo
        )
      })
     )
  }


  // edit task
  const editTask= (task,id)=>{
     setTodos(
      todos.map((todo)=>{
        return(
          todo.id === id ? {...todo,task,isEditing:!todo.isEditing} : todo
        )
      })
     )
  }



  console.log("todos", todos);
  return (
    <div className="todo-wrapper">
      <h1>Todo List  </h1>
      <TodoForm addTodo={addTodo} />

      {/* Display data */}

      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTask={editTask} task={todo}/>
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}

export default TodoWrappers;
