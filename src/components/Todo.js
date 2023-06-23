import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { CiCircleRemove } from "react-icons/ci";
import { TiEdit } from "react-icons/ti";
import { AiOutlineCheck } from "react-icons/ai";

function Todo({ todos, completeTodo, removeTodo, updateTodo, setTodos }) {
  // Leer los todos guardados en el localStorage al cargar la página
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

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
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
