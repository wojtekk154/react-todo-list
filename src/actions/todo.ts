import { SimpleTodoModel, Todo } from "../models/todo";

export const GET_ALL_TODOS = 'GET_ALL_TODOS';
export const GET_ALL_TODOS_SUCCESS = 'GET_ALL_TODOS_SUCCESS';
export const GET_ALL_TODOS_FAILURE = 'GET_ALL_TODOS_FAILURE';

export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const ADD_NEW_TODO_SUCCESS = 'ADD_NEW_TODO_SUCCESS';
export const ADD_NEW_TODO_FAILURE = 'ADD_NEW_TODO_FAILURE';

export const REMOVE_TODO = 'REMOVE_TODO';
export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS';
export const REMOVE_TODO_FAILURE = 'REMOVE_TODO_FAILURE';

export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE';

export const getAllTodos = () => ({ type: GET_ALL_TODOS });
export const getAllTodosSuccess = (payload: {[key: string]: Todo}) => ({ type: GET_ALL_TODOS_SUCCESS, payload });
export const getAllTodosFailure = (error: string) => ({ type: GET_ALL_TODOS_FAILURE, error });
export const addNewTodoAction = (payload: SimpleTodoModel) => ({ type: ADD_NEW_TODO, payload });
export const addNewTodoActionSuccess = (payload:  {[key: string]: string}) => ({ type: ADD_NEW_TODO_SUCCESS, payload });
export const addNewTodoActionFailure = (error: string) => ({ type: ADD_NEW_TODO_FAILURE, error });
export const updateTodoAction = (payload: Todo) => ({ type: UPDATE_TODO, payload });
export const updateTodoSuccessAction = (payload: Todo) => ({ type: UPDATE_TODO_SUCCESS, payload });
export const updateTodoFailureAction = (error: string) => ({ type: UPDATE_TODO_FAILURE, error });
export const removeTodoAction = (payload: string) => ({ type: REMOVE_TODO, payload });
export const removeTodoSuccessAction = (payload: string) => ({ type: REMOVE_TODO_SUCCESS, payload });
export const removeTodoFailureAction = (error: string) => ({ type: REMOVE_TODO_FAILURE, error });
