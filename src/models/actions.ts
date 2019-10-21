import { TodosState } from "./redux";

export const initState: TodosState = {
    todos: {},
    size: 0,
    active: false,
    loading: false,
    error: null
};

export interface ActionType<T> {
    type: string;
    payload?: T;
    error?: string;
}
