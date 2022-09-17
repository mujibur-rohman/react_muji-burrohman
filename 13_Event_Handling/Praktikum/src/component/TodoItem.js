import React, { useState } from 'react';
import todos from '../todosData';

const TodoItem = ({ todo, deleteTodo }) => {
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  const completeHandler = () => {
    setIsCompleted(!isCompleted);
  };

  const deleteHandler = () => {
    deleteTodo(todo.id);
  };

  return (
    <li onClick={completeHandler}>
      <div
        className="box-todo"
        style={{ textDecoration: isCompleted && 'line-through' }}
      >
        <input
          checked={isCompleted && 'checked'}
          type="checkbox"
          className="checkbox"
          onChange={completeHandler}
        />
        {todo.title}
      </div>
      <button className="delete" onClick={deleteHandler}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
