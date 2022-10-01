import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../features/todo/todoSlice';

const TodoItem = ({ todo, id, completedTodoHandler }) => {
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const dispatch = useDispatch();
  const completeHandler = () => {
    completedTodoHandler(id);
    setIsCompleted(!isCompleted);
  };

  const deleteHandler = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li>
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
