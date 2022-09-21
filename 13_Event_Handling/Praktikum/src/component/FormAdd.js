import { useState } from 'react';

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
  return (
    <div>
      <form>
        <input
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
