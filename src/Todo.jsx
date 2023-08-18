import React from "react";
const Todo = ({ todo, handleToggle }) => {
  return (
    <li className={`list-group-item ${todo.completed}`} key={todo.id}>
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleToggle(todo.id)}
        />
        <span className="ml-2">{todo.text}</span>
        {todo.completed && (
          <span className="badge badge-success ml-auto">Completed</span>
        )}
      </div>
    </li>
  );
};

export default Todo;
