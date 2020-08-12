import { combineReducers } from 'redux';

import todoReducer from './todo/Reducer';

const reducers = combineReducers({
  [todoReducer.key]: todoReducer,
});

export default reducers
