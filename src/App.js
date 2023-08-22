import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Wash dishes", completed: true },
    { id: 3, text: "Go for a walk", completed: false },
  ]);
  const [editingTodo, setEditingTodo] = useState(null);

  const handleToggle = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const addOrUpdateTodo = (todoId, newText) => {
    if (todoId) {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, text: newText } : todo
      );
      setTodos(updatedTodos);
    } else {
      const newTodoItem = { id: Date.now(), text: newText, completed: false };
      setTodos([newTodoItem, ...todos]);
    }
    setEditingTodo(null);
  };

  return (
    <div className="container mt-4">
      <h1>Todo App</h1>
      <ul className="list-group mt-4">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
            setEditingTodo={setEditingTodo}
          />
        ))}
      </ul>
      <TodoForm
        addOrUpdateTodo={addOrUpdateTodo}
        editedTodo={
          editingTodo ? todos.find((todo) => todo.id === editingTodo) : null
        }
      />
    </div>
  );
}

export default App;
