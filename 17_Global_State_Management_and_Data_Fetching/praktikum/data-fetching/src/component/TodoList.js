import FormAdd from './FormAdd';
import TodoItem from './TodoItem';
import { useGetTodosQuery } from '../app/features/api';

const TodoList = () => {
  const { data: todos, isLoading, isSuccess } = useGetTodosQuery();

  return (
    <>
      <FormAdd />
      {isLoading && <p>Loading...</p>}
      {isSuccess && (
        <ul>
          {todos.todo
            .map((todo) => {
              return <TodoItem key={todo.id} todo={todo} />;
            })
            .reverse()}
        </ul>
      )}
    </>
  );
};

export default TodoList;
