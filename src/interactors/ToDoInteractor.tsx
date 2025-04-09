import { Todo } from "../types/ToDoTypes";
import { FetchTodosUseCase, AddTodoUseCase, ToggleTodoUseCase, DeleteTodoUseCase } from "../useCases/ToDoUseCases";
import { todoGateway } from "../gateways/ToDoGateway";

export class ToDoInteractor
  implements FetchTodosUseCase, AddTodoUseCase, ToggleTodoUseCase, DeleteTodoUseCase
{
  fetchTodos(): Todo[] {
    return todoGateway.getTodos();
  }

  addTodo(text: string): Todo[] {
    const todos = todoGateway.getTodos();
    const newTodo: Todo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    const updatedTodos = [...todos, newTodo];
    todoGateway.saveTodos(updatedTodos);
    return updatedTodos;
  }

  toggleTodo(id: number): Todo[] {
    const todos = todoGateway.getTodos();
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    todoGateway.saveTodos(updatedTodos);
    return updatedTodos;
  }

  deleteTodo(id: number): Todo[] {
    const todos = todoGateway.getTodos();
    const updatedTodos = todos.filter(todo => todo.id !== id);
    todoGateway.saveTodos(updatedTodos);
    return updatedTodos;
  }
}