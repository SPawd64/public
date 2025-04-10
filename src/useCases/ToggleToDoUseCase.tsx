import { Todo } from "../types/ToDoTypes";

export interface ToggleTodoUseCase {
    toggleTodo(id: number): Promise<Todo[]>;
}