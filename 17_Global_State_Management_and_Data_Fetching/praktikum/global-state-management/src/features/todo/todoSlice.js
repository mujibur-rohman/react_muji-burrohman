import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todos = createSlice({
  name: 'Todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: state.length + 1,
        title: action.payload,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    completedTodo: (state, action) => {
      const todo = state.find((todo) => todo.id == action.payload);
      todo.completed = !todo.completed;
    },
  },
});

export const { addTodo, deleteTodo, completedTodo } = todos.actions;
export default todos.reducer;
