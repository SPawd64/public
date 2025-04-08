import { useState } from "react";
import { useTodos } from "../hooks/ToDoHooks.tsx";
import "./TodoList.css";

export function TodoList() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="body-container">
        <div className="todo-container">
        <h1 className="todo-title">ToDo List</h1>
        <form onSubmit={handleSubmit} className="todo-form">
            <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            className="todo-input"
            placeholder="Įvesk užduotį"
            />
        </form>
        <ul className="todo-list">
            {todos.map(todo => (
            <li key={todo.id} className="todo-item">
                <span
                onClick={() => toggleTodo(todo.id)}
                className={`todo-text ${todo.completed ? "completed" : ""}`}
                >
                {todo.text}
                </span>
                <button
                onClick={() => deleteTodo(todo.id)}
                className="delete-button"
                >
                ✕
                </button>
            </li>
            ))}
        </ul>
        </div>
    </div>
  );
}
