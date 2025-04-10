import { Todo } from "../types/ToDoTypes";
import { DeleteTodoUseCase } from "../useCases/DeleteToDoUseCase";
import { todoGateway } from "../gateways/ToDoGateway";

export class DeleteToDoInteractor implements DeleteTodoUseCase {
    async deleteTodo(id: number): Promise<Todo[]> {
        const todos = await todoGateway.getTodos();
        const updatedTodos = todos.filter(todo => todo.id !== id);
        await todoGateway.saveTodos(updatedTodos);
        return updatedTodos;
    }
}