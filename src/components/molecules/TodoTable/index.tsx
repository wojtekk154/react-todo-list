import React from "react";
import { TodoTableModel } from "../../../models/todo";
import styled from "styled-components";
import { TodoStatus } from "../../../reducers/todoReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const TableStretch = styled.table`
    width: 100%;
`;

// @ts-ignore
const TodosTable: React.FC<TodoTableModel> = (props: TodoTableModel) => (
    <div className="table-container">
        <TableStretch className="table">
            <thead>
            <tr>
                {props.columns.map((item, index) => <th key={'header' + item + index}>{props.names[item]}</th>)}
            </tr>
            </thead>
            <tbody>
            {
                Object.entries(props.data).map(([id, item]) => (
                    <tr key={id}>
                        {props.columns.map((col: string) =>
                            <>
                                {
                                    (col !== 'id' && col !== 'status') && <td key={`${col}-${id}`}>{item[col]}</td>
                                }
                            </>
                        )}
                        <td key={'sterlinkg' + id}>
                            {TodoStatus[item.status]}
                        </td>
                        <td key={'sterlinkg2' + id}>
                            <span onClick={() => props.removeTodo(id)}>
                                <FontAwesomeIcon icon={faTrashAlt}/>
                            </span>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </TableStretch>
    </div>
);

export { TodosTable }
