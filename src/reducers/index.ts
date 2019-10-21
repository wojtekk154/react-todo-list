import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { TodosState } from "../models/redux";

export interface AppState {
    todo: TodosState
}

const rootReducer = combineReducers<AppState>({
    todo: todoReducer
});

export { rootReducer }
