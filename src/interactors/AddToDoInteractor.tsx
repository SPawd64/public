import { Todo } from "../types/ToDoTypes";
import { AddTodoUseCase } from "../useCases/AddToDoUseCase";
import { todoGateway } from "../gateways/ToDoGateway";

export class AddToDoInteractor implements AddTodoUseCase {
    async addTodo(text: string): Promise<Todo[]> {
        const todos = await todoGateway.getTodos();
        const newTodo: Todo = {
            id: Date.now() + Math.floor(Math.random() * 1000),
            text,
            completed: false,
        };
        const updatedTodos = [...todos, newTodo];
        await todoGateway.saveTodos(updatedTodos);
        return updatedTodos;
    }
}