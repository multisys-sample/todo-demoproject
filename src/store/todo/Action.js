import { createAction } from "redux-actions";

import { ADD_TODO, UPDATE_TODO, DELETE_TODO, DONE_TODO } from "./Constant";

const addTodoAction = (props) => ({ text: props, done: false });
const updateTodoAction = ({ key, value }) => ({ key, text: value });
const deleteTodoAction = ({ key }) => ({ key });
const doneTodoAction = ({ key, done }) => ({ key, done });

export const addTodo = createAction(ADD_TODO, addTodoAction);
export const updateTodo = createAction(UPDATE_TODO, updateTodoAction);
export const deleteTodo = createAction(DELETE_TODO, deleteTodoAction);
export const doneTodo = createAction(DONE_TODO, doneTodoAction);
