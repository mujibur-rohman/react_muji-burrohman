import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <li
      className="box-todo"
      style={{ textDecoration: todo.completed || 'line-through' }}
    >
      {todo.title}
    </li>
  );
};

export default TodoItem;
