import { useState, useEffect } from "react";
import { Todo } from "../types/ToDoTypes";
import { TodoController } from "../controllers/ToDoController";

export function useTodos(todoController: TodoController) {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const loadTodos = async () => {
        try {
            setIsLoading(true);
            const loadedTodos = await todoController.loadTodos();
            setTodos(loadedTodos);
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Failed to load todos'));
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadTodos();
    }, []);

    const addTodo = async (text: string) => {
        try {
            await todoController.createTodo(text);
            await loadTodos();
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Failed to add todo'));
        }
    };

    const toggleTodo = async (id: number) => {
        try {
            await todoController.toggleTodo(id);
            await loadTodos();
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Failed to toggle todo'));
        }
    };

    const deleteTodo = async (id: number) => {
        try {
            await todoController.removeTodo(id);
            await loadTodos();
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Failed to delete todo'));
        }
    };

    return { todos, addTodo, toggleTodo, deleteTodo, isLoading, error };
}