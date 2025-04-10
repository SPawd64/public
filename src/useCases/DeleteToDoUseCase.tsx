import { Todo } from "../types/ToDoTypes";

export interface DeleteTodoUseCase {
    deleteTodo(id: number): Promise<Todo[]>;
}
