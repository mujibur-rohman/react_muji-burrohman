import { useState, useEffect, useRef } from 'react';

const FormAdd = ({ addTodos }) => {
  const [title, setTitle] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    if (title === '') {
      alert('Form Tidak Boleh Kosong');
      return;
    }
    addTodos(title);
    setTitle('');
  };

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <form>
        <input
          ref={inputRef}
          type="text"
          className="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="add" onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormAdd;
