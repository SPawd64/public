import { useState } from "react";
import { useTodos } from "../hooks/UseToDo.tsx";
import "./TodoList.css";
import { createTodoController } from "../controllers/ToDoController";
import { AddToDoInteractor } from "../interactors/AddToDoInteractor";
import { DeleteToDoInteractor } from "../interactors/DeleteToDoInterActor";
import { FetchToDoInteractor } from "../interactors/FetchToDoInteractor";
import { ToggleToDoInteractor } from "../interactors/ToggleToDoInteractor";

const todoController = createTodoController(
  new FetchToDoInteractor(),
  new AddToDoInteractor(),
  new ToggleToDoInteractor(),
  new DeleteToDoInteractor()
);

export function TodoList() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos(todoController);
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
