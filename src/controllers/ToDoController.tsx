import { Todo } from "../types/ToDoTypes";
import { AddTodoUseCase } from "../useCases/AddToDoUseCase";
import { DeleteTodoUseCase } from "../useCases/DeleteToDoUseCase";
import { FetchTodosUseCase } from "../useCases/FetchToDoUseCase";
import { ToggleTodoUseCase } from "../useCases/ToggleToDoUseCase";

export interface TodoController {
    loadTodos(): Promise<Todo[]>;
    createTodo(text: string): Promise<void>;
    toggleTodo(id: number): Promise<void>;
    removeTodo(id: number): Promise<void>;
}

export const createTodoController = (
    fetchTodosUseCase: FetchTodosUseCase,
    addTodoUseCase: AddTodoUseCase,
    toggleTodoUseCase: ToggleTodoUseCase,
    deleteTodoUseCase: DeleteTodoUseCase
): TodoController => {
    return {
        async loadTodos() {
            return fetchTodosUseCase.fetchTodos();
        },

        async createTodo(text: string) {
            await addTodoUseCase.addTodo(text);
        },

        async toggleTodo(id: number) {
            await toggleTodoUseCase.toggleTodo(id);
        },

        async removeTodo(id: number) {
            await deleteTodoUseCase.deleteTodo(id);
        }
    };
};