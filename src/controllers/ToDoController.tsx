import { todoUseCases } from "../useCases/ToDoUseCases";
import { Todo } from "../types/ToDoTypes";

export const todoController = {
  loadTodos(): Todo[] {
    return todoUseCases.fetchTodos();
  },

  createTodo(text: string): Todo[] {
    return todoUseCases.addTodo(text);
  },

  toggleTodo(id: string): Todo[] {
    return todoUseCases.toggleTodo(id);
  },

  removeTodo(id: string): Todo[] {
    return todoUseCases.deleteTodo(id);
  }
};
