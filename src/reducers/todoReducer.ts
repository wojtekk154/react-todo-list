import {
    ADD_NEW_TODO,
    ADD_NEW_TODO_SUCCESS,
    GET_ALL_TODOS,
    GET_ALL_TODOS_FAILURE,
    GET_ALL_TODOS_SUCCESS,
    REMOVE_TODO,
    REMOVE_TODO_SUCCESS
} from "../actions/todo";
import { TodosState } from "../models/redux";
import { ActionType, initState } from "../models/actions";
import { Todo } from "../models/todo";

export enum TodoStatus {
    CREATED,
    INPROGRES,
    DONE,
    OUTDATED
}



const todoReducer = (state: TodosState = initState, action: ActionType<any>): TodosState => {
    switch (action.type) {
        case GET_ALL_TODOS:
            return {
                ...state,
                loading: true
            };
        case GET_ALL_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            };
        case GET_ALL_TODOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error || null
            };
        case ADD_NEW_TODO:
            return {
                ...state,
                loading: true
            };
        case ADD_NEW_TODO_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case REMOVE_TODO:
            return {
                ...state,
                loading: true
            };
        case REMOVE_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: state.todos
            };
        default:
            return state;
    }
};

export { todoReducer };
