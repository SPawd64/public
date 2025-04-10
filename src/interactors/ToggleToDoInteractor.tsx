import { Todo } from "../types/ToDoTypes";
import { ToggleTodoUseCase } from "../useCases/ToggleToDoUseCase";
import { todoGateway } from "../gateways/ToDoGateway";

export class ToggleToDoInteractor implements ToggleTodoUseCase {
    async toggleTodo(id: number): Promise<Todo[]> {
        const todos = await todoGateway.getTodos();
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        await todoGateway.saveTodos(updatedTodos);
        return updatedTodos;
    }
}