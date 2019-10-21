import { call, put, takeLatest } from 'redux-saga/effects'
import {
    ADD_NEW_TODO, ADD_NEW_TODO_SUCCESS,
    addNewTodoActionFailure,
    addNewTodoActionSuccess,
    GET_ALL_TODOS,
    getAllTodosFailure,
    getAllTodosSuccess,
    REMOVE_TODO, REMOVE_TODO_SUCCESS,
    removeTodoFailureAction,
    removeTodoSuccessAction
} from "../actions/todo";
import { API } from "../constants/api";
import axios from 'axios';
import { SimpleTodoModel, Todo } from "../models/todo";
import { ActionType } from "../models/actions";
import { TodoStatus } from "../reducers/todoReducer";

function fetchTodosFromApi(): Promise<{ [key: string]: Todo }> {
    const url = API.HOST + API.reactTodo + API.SUFFIX;

    return axios.get(url)
        .then(response => response.data)
        .catch(error => Promise.reject(error))
}

function addNewTodo(data: SimpleTodoModel) {
    const url = API.HOST + API.reactTodo + API.SUFFIX;
    const todo = {
        ...data,
        status: TodoStatus.CREATED,
        userId: null,
        createdAt: new Date()
    };
    return axios.post(url, todo)
        .then(response => response.data)
        .catch(error => Promise.reject(error))
}

function removeTodo(id: string) {
    const url = API.HOST + API.reactTodo + '/' + id + API.SUFFIX;

    return axios.delete(url)
        .then(response => response.data)
        .catch(error => Promise.reject(error))
}

function* removeTodoSaga(action: ActionType<string>) {
    try {
        const id: any = action.payload;
        const todo = yield call(removeTodo, id);

        yield put(removeTodoSuccessAction(id));
    } catch (e) {
        put(removeTodoFailureAction('errror'))
    }
}

function* addNewTodoSaga(data: ActionType<SimpleTodoModel>) {
    try {
        // @ts-ignore
        const newTodo = yield call(addNewTodo, data.payload);

        yield put(addNewTodoActionSuccess(newTodo))
    } catch (e) {
        put(addNewTodoActionFailure('error'))
    }
}

function* fetchTodos() {
    try {
        const todos = yield call(fetchTodosFromApi);
        yield  put(getAllTodosSuccess(todos))
    } catch (e) {
        put(getAllTodosFailure('error'))
    }
}


export function* todoSaga() {
    yield  takeLatest(GET_ALL_TODOS, fetchTodos);
    yield  takeLatest(ADD_NEW_TODO_SUCCESS, fetchTodos);
    yield  takeLatest(REMOVE_TODO_SUCCESS, fetchTodos);
    yield  takeLatest(ADD_NEW_TODO, addNewTodoSaga);
    // @ts-ignore
    yield  takeLatest(REMOVE_TODO, removeTodoSaga);
}

