import React, { useState } from "react";

function EditTodoForm({ editTask, task ,deleteTodo }) {
  const [value, setValue] = useState(task.task);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "" && description.trim() === "") {
      deleteTodo(task.id);
    } else {
      editTask(value, description, task.id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task..."
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="todo-input description"
        placeholder="Update description..."
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
}

export default EditTodoForm;
