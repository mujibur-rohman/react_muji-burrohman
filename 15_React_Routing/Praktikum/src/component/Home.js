import React from 'react';
import TodoList from './Todos/TodoList';
const Home = () => {
  return (
    <>
      <div className="title">
        <p style={{ fontWeight: 'bold' }}>Todos</p>
      </div>
      <section>
        <TodoList />
      </section>
    </>
  );
};

export default Home;
