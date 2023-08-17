import React, { useState } from "react";

function TodoForm({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <form className="container mt-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <h5>Todo</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Your todo...."
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-outline-dark mt-2">
        Submit
      </button>
    </form>
  );
}

export default TodoForm;
