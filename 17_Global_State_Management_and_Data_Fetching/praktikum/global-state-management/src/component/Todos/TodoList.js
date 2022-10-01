import FormAdd from './FormAdd';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, completedTodo } from '../../features/todo/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTodos = (todoTitle) => {
    dispatch(addTodo(todoTitle));
  };

  const completedTodoHandler = (id) => {
    dispatch(completedTodo(id));
  };

  return (
    <>
      <FormAdd addTodos={addTodos} />
      <ul className="list-todo">
        {todos
          .map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                id={todo.id}
                completedTodoHandler={completedTodoHandler}
              />
            );
          })
          .reverse()}
      </ul>
    </>
  );
};

export default TodoList;
