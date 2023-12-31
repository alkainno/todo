import React, { useState, useEffect } from "react";
import classNames from "classnames";

const TodoForm = ({ addOrUpdateTodo, editedTodo }) => {
  const [newTodo, setNewTodo] = useState(editedTodo?.text || "");
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setIsEditing(!!editedTodo);
    setNewTodo(editedTodo?.text || "");
  }, [editedTodo]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setNewTodo(inputValue);
    setIsInputEmpty(/^\s*$/.test(inputValue));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() === "") {
      setIsInputEmpty(true);
      return;
    }

    if (isEditing) {
      addOrUpdateTodo(editedTodo.id, newTodo);
    } else {
      addOrUpdateTodo(null, newTodo);
    }

    setNewTodo("");
    setIsEditing(false);
  };

  const formGroupClasses = classNames("form-group", {
    "has-error": isInputEmpty,
  });

  const inputClasses = classNames("form-control", {
    empty: isInputEmpty,
  });

  const inputStyle = {
    border: isInputEmpty
      ? "1px solid red"
      : isEditing
      ? "1px solid black"
      : "1px solid #ced4da",
  };

  return (
    <form onSubmit={handleFormSubmit} style={{ marginTop: "20px" }}>
      <div className={formGroupClasses}>
        <h5>{isEditing ? "Edit Todo" : "New Todo"}</h5>
        <input
          type="text"
          className={inputClasses}
          placeholder="Your todo...."
          value={newTodo}
          onChange={handleInputChange}
          style={inputStyle}
        />
      </div>
      <button type="submit" className="btn btn-outline-dark mt-2">
        {isEditing ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default TodoForm;
