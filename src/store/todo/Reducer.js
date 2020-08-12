import { handleActions } from "redux-actions";

import { addTodo, updateTodo, deleteTodo, doneTodo } from "./Action";

const defaultProps = [];

export const initialState = [...defaultProps];

const reducer = handleActions(
  {
    [addTodo]: (state, { payload }) => [...state, payload],
    [updateTodo]: (state, { payload }) =>
      state.map((todo, key) =>
        key === payload.key ? { ...todo, text: payload.text } : todo
      ),
    [deleteTodo]: (state, { payload }) =>
      state.filter((todo, key) => key !== payload.key),
    [doneTodo]: (state, { payload }) =>
      state.map((todo, key) =>
        key === payload.key ? { ...todo, done: payload.done } : todo
      ),
  },
  initialState
);
reducer.key = "todo";

export default reducer;
