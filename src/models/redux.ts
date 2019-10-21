import { Todo } from "./todo";


export interface TodosState {
    todos: { [key: string]: Todo };
    size: number;
    active: boolean;
    loading: boolean;
    error: string | null;
}
