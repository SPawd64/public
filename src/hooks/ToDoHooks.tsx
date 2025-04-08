import { useState, useEffect } from "react";
import { Todo } from "../types/ToDoTypes";
import { todoController } from "../controllers/ToDoController";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setTodos(todoController.loadTodos());
  }, []);

  const addTodo = (text: string) => {
    setTodos(todoController.createTodo(text));
  };

  const toggleTodo = (id: number) => {
    setTodos(todoController.toggleTodo(id));
  };

  const deleteTodo = (id: number) => {
    setTodos(todoController.removeTodo(id));
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
}
