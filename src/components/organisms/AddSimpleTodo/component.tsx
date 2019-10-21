import React, { useEffect } from 'react';
import { Formik } from "formik";
import { ErrorValidation, Hint, InputControl } from "./style";
import { SimpleTodoModel } from "../../../models/todo";

const initialValues = { todo: '' }
const validations = (values: any) => {
    let errors = {};
    if (!values.todo) {
        errors = {
            ...errors,
            todo: 'Required'
        };
    }

    return errors;
};

const SimpleTodoForm: React.FC<{ addNewTodoAction: Function }> = (props: { addNewTodoAction: Function }) => {

    const addTodo = (todo: string) => {
        const data: SimpleTodoModel = {
            description: todo.split(',')[1],
            title: todo.split(',')[0],
        };

        props.addNewTodoAction(data);
    };

    return (
        <div>
            <Formik initialValues={initialValues}
                    validate={validations}
                    onSubmit={(values, { setSubmitting }) => {
                        addTodo(values.todo);
                        setSubmitting(false);
                    }}>
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="field has-addons">
                            <InputControl className="control">
                                <input className="input" type="text" placeholder="Find a repository" name="todo"
                                       onChange={handleChange} onBlur={handleBlur} value={values.todo}/>
                                <Hint>Have to enter title and short description after comma, order is important eg.
                                    'Title, Simple Description'.</Hint>
                                {errors.todo && touched.todo && <ErrorValidation>{errors.todo}</ErrorValidation>}
                            </InputControl>
                            <div className="control">
                                <button className="button is-info" type="submit" disabled={isSubmitting}>
                                    Add
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export { SimpleTodoForm };


// {/*<Form>*/}
// {/*    <Field className="field" type="text" name="todo"/>*/}
// {/*    <ErrorMessage name="todo" component="div"/>*/}
// {/*    <button type="submit" disabled={isSubmitting}>*/}
// {/*        Submit*/}
// {/*    </button>*/}
// {/*</Form>*/}
