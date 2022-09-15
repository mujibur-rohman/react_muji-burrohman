import React from 'react';
import todos from '../todos';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
