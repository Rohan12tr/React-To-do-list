import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTodo(task, description);
      setTask("");
      setDescription("");
    }
    if(task=="" & description == ""){
      alert("please filled the feilds")
      setError(true)
    }else{
      setError(false)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className={`todo-input ${error ? "inp-error" : ""}`}
        placeholder="What is the task today?"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={`todo-input description ${error ? "inp-error" : ""}`}
        placeholder="Add description"
      />
      <button type="submit" className="todo-btn">
        Add task
      </button>
    </form>
  );
}

export default TodoForm;
