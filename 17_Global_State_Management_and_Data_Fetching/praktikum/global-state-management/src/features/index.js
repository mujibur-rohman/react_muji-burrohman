import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todo/todoSlice';

const rootReducers = combineReducers({
  todos: todoReducer,
});

export default rootReducers;
