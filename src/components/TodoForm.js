import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Genera un id random con numeros hasta el 10.000
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Actualiza tu actividad"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Actualizar
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Agrega una actividad"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Agregar
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
