import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Wash dishes", completed: true },
    { id: 3, text: "Go for a walk", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleToggle = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const addTodo = (text) => {
    console.log("Adding new todo:", text);
    const newTodoItem = { id: Date.now(), text, completed: false };
    setTodos([newTodoItem, ...todos]);
    setNewTodo(newTodoItem.text);
  };

  return (
    <>
      <Todo todos={todos} newTodo={newTodo} onToggle={handleToggle} />
      <TodoForm onSubmit={addTodo} />
    </>
  );
}

export default App;
