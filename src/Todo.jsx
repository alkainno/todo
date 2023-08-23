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
        <span
          className="list-group"
          style={{
            marginLeft: "10px",
            wordWrap: "break-word",
            display: "block",
            width: "130px",
          }}
        >
          {todo.text}
        </span>
        <div className="d-flex" style={{ marginLeft: "auto" }}>
          {todo.completed && (
            <span className="badge Complete" style={{ marginRight: "10px" }}>
              Completed
            </span>
          )}
          <span className="badge update" onClick={handleEditClick}>
            <FaEdit />
          </span>
        </div>
      </div>
    </li>
  );
};

export default Todo;
