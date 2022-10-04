import React, { useState } from 'react';
import { useAddTodoMutation } from '../app/features/api';

const FormAdd = () => {
  const [addTodo] = useAddTodoMutation();
  const [inputTodo, setInputTodo] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    setInputTodo('');
    await addTodo({ title: inputTodo, completed: false });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <button className="add" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormAdd;
