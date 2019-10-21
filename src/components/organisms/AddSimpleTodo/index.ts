import { connect } from 'react-redux';
import { addNewTodoAction } from "actions/todo";
import { AppState } from "../../../reducers";
import { SimpleTodoForm } from "./component";

const mapDispatchToProps = {
    addNewTodoAction
};

const mapStateToProps = (state: AppState) => ({});

const AddNewSimpleTodoForm = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SimpleTodoForm);

export { AddNewSimpleTodoForm }
