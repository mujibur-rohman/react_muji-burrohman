import './App.css';
import TodoList from './component/TodoList';

function App() {
  return (
    <>
      <nav className="navbar">
        <p style={{ fontWeight: 'bold' }}>Todos</p>
      </nav>
      <section>
        <TodoList />
      </section>
    </>
  );
}

export default App;
