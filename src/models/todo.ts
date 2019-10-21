import { TodoStatus } from "../reducers/todoReducer";

export interface SimpleTodoModel {
    title: string;
    description: string;
}

export interface ListProps {
    getAllTodos: Function;
    removeTodoAction: Function;
    updateTodoAction: Function;
    todos: { [key: string]: Todo };
    loading: boolean;
}

export interface TodoTableModel {
    columns: string[];
    names: any;
    data: { [key: string]: Todo };
    removeTodo: Function;
}


export interface Todo {
    title: string;
    description: string;
    userId?: string;
    status: TodoStatus;
    createdAt: string | Date;

    [key: string]: any;
}
