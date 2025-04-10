import { Todo } from "../types/ToDoTypes";

export interface AddTodoUseCase {
    addTodo(text: string): Promise<Todo[]>;
}