import { Todo } from "../types/ToDoTypes";

export interface FetchTodosUseCase {
    fetchTodos(): Promise<Todo[]>;
}