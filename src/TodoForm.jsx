import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() === "") return;

    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <h5>Todo</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Your todo...."
          value={newTodo}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-outline-dark mt-2">
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
