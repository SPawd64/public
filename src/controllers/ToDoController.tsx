import { ToDoInteractor } from "../interactors/ToDoInteractor";

const interactor = new ToDoInteractor();

export const todoController = {
  loadTodos() {
    return interactor.fetchTodos();
  },

  createTodo(text: string) {
    return interactor.addTodo(text);
  },

  toggleTodo(id: number) {
    return interactor.toggleTodo(id);
  },

  removeTodo(id: number) {
    return interactor.deleteTodo(id);
  },
};