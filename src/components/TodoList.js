import React, { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\$*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Que tienes para hoy?</h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  );
}

export default TodoList;
