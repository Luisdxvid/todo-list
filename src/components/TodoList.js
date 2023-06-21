import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  // Leer los todos guardados en el localStorage al cargar la página
  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    if (localTodos) {
      setTodos(localTodos);
    }
  }, []);

  // Guardar los nuevos todos en el localStorage
  const saveLocalTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (todo) => {
    if (!todo.text || /^\$*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    saveLocalTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\$*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
    saveLocalTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
    saveLocalTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Que tienes para hoy?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
