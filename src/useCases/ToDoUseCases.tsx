import { Todo } from "../types/ToDoTypes";
import { todoGateway } from "../gateways/ToDoGateway";

export const todoUseCases = {
  fetchTodos(): Todo[] {
    return todoGateway.getTodos();
  },

  addTodo(text: string): Todo[] {
    const todos = todoGateway.getTodos();
    const usedIds = todos.map(todo => todo.id);
    let newId: number = 1;
    while (usedIds.includes(newId)) {
      newId++;
    }
    
    const newTodo: Todo = {
      id: newId,
      text,
      completed: false,
    };
    const updated = [...todos, newTodo];
    todoGateway.saveTodos(updated);
    return updated;
  },

  toggleTodo(id: number): Todo[] {
    const todos = todoGateway.getTodos();
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    todoGateway.saveTodos(updated);
    return updated;
  },

  deleteTodo(id: number): Todo[] {
    const updated = todoGateway.getTodos().filter(todo => todo.id !== id);
    todoGateway.saveTodos(updated);
    return updated;
  }
};
