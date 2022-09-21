import { useState } from 'react';
import todosData from '../../todosData';
import FormAdd from './FormAdd';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState(todosData);

  const addTodos = (todoTitle) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: todoTitle,
        completed: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    const newArr = todos.filter((todo) => todo.id !== id);
    setTodos(newArr.reverse());
  };

  return (
    <>
      <FormAdd addTodos={addTodos} />
      <ul className="list-todo">
        {todos
          .map((todo) => {
            return (
              <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
            );
          })
          .reverse()}
      </ul>
    </>
  );
};

export default TodoList;
