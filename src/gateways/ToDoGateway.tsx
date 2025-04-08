import { Todo } from "../types/ToDoTypes";

const STORAGE_KEY = "todos";

export const todoGateway = {
  getTodos(): Todo[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveTodos(todos: Todo[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
};
