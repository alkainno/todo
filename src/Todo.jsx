import React from "react";
import classNames from "classnames";
import { FaEdit } from "react-icons/fa";

const Todo = ({ todo, handleToggle, setEditingTodo }) => {
  const handleEditClick = () => {
    setEditingTodo(todo.id);
  };

  const listItemClasses = classNames("list-group-item", {
    completed: todo.completed,
  });

  return (
    <li className={listItemClasses} key={todo.id}>
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleToggle(todo.id)}
        />
        <span className="ml-2 list" style={{ marginLeft: "20px" }}>
          {todo.text}
        </span>
        {todo.completed && (
          <span className="badge badge-success Complete">Completed</span>
        )}
        <span className="badge update" onClick={handleEditClick}>
          <FaEdit />
        </span>
      </div>
    </li>
  );
};

export default Todo;
