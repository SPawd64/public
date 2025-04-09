import { Todo } from "../types/ToDoTypes";

export interface FetchTodosUseCase {
  fetchTodos(): Todo[];
}

export interface AddTodoUseCase {
  addTodo(text: string): Todo[];
}

export interface ToggleTodoUseCase {
  toggleTodo(id: number): Todo[];
}

export interface DeleteTodoUseCase {
  deleteTodo(id: number): Todo[];
}