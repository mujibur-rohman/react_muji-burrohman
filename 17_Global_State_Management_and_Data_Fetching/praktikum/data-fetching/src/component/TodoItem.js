import React, { useState } from 'react';
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from '../app/features/api';

const TodoItem = ({ todo }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  const completedHandler = async () => {
    setIsCompleted(!todo.completed);
    await updateTodo({ ...todo, completed: !todo.completed });
  };
  return (
    <li>
      <div
        className="box-todo"
        style={{ textDecoration: isCompleted && 'line-through' }}
      >
        <input
          type="checkbox"
          checked={isCompleted}
          className="checkbox"
          onChange={completedHandler}
        />
        {todo.title}
      </div>
      <button className="delete" onClick={() => deleteTodo({ id: todo.id })}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
