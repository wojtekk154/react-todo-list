import React, { useEffect } from 'react';
import { AddNewSimpleTodoForm } from "../../organisms/AddSimpleTodo";
import { TodosTable } from "../../molecules/TodoTable";
import { ListProps } from "../../../models/todo";
import { Spinner } from "../../molecules/Spinner";

const List: React.FC<ListProps> = ({ getAllTodos, todos, loading, removeTodoAction, updateTodoAction }: ListProps) => {
    const columnsFields = ['title', 'description', 'createdAt', 'status', 'id'];
    const columnNames = {
        status: 'Status',
        title: 'Title',
        description: 'Description',
        createdAt: 'Creation time',
        id: 'Actions'
    };
    useEffect(() => {
        // HINT: empyty array trigers useEffect only once
        getAllTodos();
    }, []);

    const removeTodo = (id: any) => {
        removeTodoAction(id);
    };
    return (
        <div>
            <AddNewSimpleTodoForm/>

            {loading && <Spinner/>}
            {!loading && (todos !== null && todos !== undefined && todos !== {}) ?
                <TodosTable columns={columnsFields} names={columnNames} data={todos} removeTodo={removeTodo}/> :
                <h1>Lack of results</h1>
            }
        </div>
    );
};

export { List };
