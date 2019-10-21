import { connect } from 'react-redux';
import { List } from "./component";
import { getAllTodos, removeTodoAction, updateTodoAction } from "actions/todo";
import { AppState } from "../../../reducers";

const mapDispatchToProps = {
    getAllTodos,
    removeTodoAction,
    updateTodoAction
};

const mapStateToProps = (state: AppState) => ({
    todos: state.todo.todos,
    loading: state.todo.loading
});
//
const TodoListPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(List);

export { TodoListPage }
