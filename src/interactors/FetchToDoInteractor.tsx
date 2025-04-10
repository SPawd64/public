import { Todo } from "../types/ToDoTypes";
import { FetchTodosUseCase } from "../useCases/FetchToDoUseCase";
import { todoGateway } from "../gateways/ToDoGateway";

export class FetchToDoInteractor implements FetchTodosUseCase {
    async fetchTodos(): Promise<Todo[]> {
        return await todoGateway.getTodos();
    }
}