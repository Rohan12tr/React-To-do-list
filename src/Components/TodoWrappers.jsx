import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import "../Css/TodoWrapper.css";
import EditTodoForm from "./EditTodoForm";
import Todo from "./Todo";

function TodoWrappers() {
  const [todos, setTodos] = useState([]);

  // Load from localStorage when component mounts
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task, description) => {
    const newTodo = {
      id: Date.now(),
      task,
      description,
      completed: false,
      isEditing: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, description, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task, description, isEditing: false }
          : todo
      )
    );
  };

  return (
    <div className="todo-wrapper">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm
            key={todo.id}
            deleteTodo={deleteTodo}
            editTask={editTask}
            task={todo}
          />
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
