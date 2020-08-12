import { createSelector } from 'reselect';

import reducer, { initialState } from './Reducer';
const portalSelector = (state) => state || initialState;

export const makeSelectTodo = () =>
  createSelector(portalSelector, (subState) => subState[reducer.key]);
