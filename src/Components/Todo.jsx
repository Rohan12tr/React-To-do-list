import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo({ task, deleteTodo, toggleComplete, editTodo }) {
  return (
    <div className="list-todo">
      <p
        className={`${task.completed ? "completed" : "incompleted"} task`}
      >
        <b>Task :</b>  {task.task}
      </p>
      <p
        className={`${task.completed ? "completed" : "incompleted"} description`}
      >
        <b>Description :</b>  {task.description}
      </p>
      <div className="list-icons">
        <FontAwesomeIcon
          className="edit-icon"
          onClick={() => editTodo(task.id)}
          icon={faPenToSquare}
        />
        <FontAwesomeIcon
          className="delete-icon"
          onClick={() => deleteTodo(task.id)}
          icon={faTrash}
        />
        <button onClick={() => toggleComplete(task.id)}>{task.completed ? "❌ " : "✔️"}</button>
      </div>
    </div>
  );
}

export default Todo;
