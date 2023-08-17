import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const todoData = [
  { id: 1, text: "Buy groceries", completed: false },
  { id: 2, text: "Wash dishes", completed: true },
  { id: 3, text: "Go for a walk", completed: false },
];

function TodoItem({ todo, onToggle }) {
  return (
    <li className={`list-group-item ${todo.completed}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className="ml-2">{todo.text}</span>
      {todo.completed && <span className="badge badge-success">Completed</span>}
    </li>
  );
}

function Todo({ todos, newTodo, onToggle }) {
  return (
    <div className="container mt-4">
      {newTodo && <div>New Todo: {newTodo}</div>}
      <h1>Todo App</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
