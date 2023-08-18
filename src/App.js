import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Wash dishes", completed: true },
    { id: 3, text: "Go for a walk", completed: false },
  ]);

  const handleToggle = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const addTodo = (text) => {
    const newTodoItem = { id: Date.now(), text: text, completed: false };
    setTodos([newTodoItem, ...todos]);
  };

  return (
    <div className="container mt-4">
      <h1>Todo App</h1>
      <ul className="list-group mt-4">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} handleToggle={handleToggle} />
        ))}
      </ul>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
