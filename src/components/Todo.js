import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { CiCircleRemove } from "react-icons/ci";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <CiCircleRemove
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit onClick={() => removeTodo(todo.id)} className="delete-icon" />
      </div>
    </div>
  ));
}

export default Todo;
