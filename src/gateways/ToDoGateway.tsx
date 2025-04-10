import { Todo } from "../types/ToDoTypes";

const STORAGE_KEY = "todos";

export const todoGateway = {
    async getTodos(): Promise<Todo[]> {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    },

    async saveTodos(todos: Todo[]): Promise<void> {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
};
