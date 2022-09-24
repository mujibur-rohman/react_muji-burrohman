import React, { useRef, useState } from 'react';
import useValidation from '../Library/useValidation';
import FromInput from './FromInput';

const Form = () => {
  const initialState = {
    fullname: '',
    email: '',
    noHp: '',
    background: '',
    program: '',
    surat: '',
    textarea: '',
  };

  const [value, setValue] = useState(initialState);
  const [error, setError] = useState({
    fullname: '',
    email: '',
    noHp: '',
    background: '',
    program: '',
    surat: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const errorValid = useValidation(value);
    setError(errorValid);
    if (Object.keys(errorValid).length === 0) {
      alert(`Data Pendaftar ${value.fullname} berhasi diterima`);
    } else {
      alert('Data Pendaftar Tidak Sesuai');
    }
  };

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: [e.target.value] });
  };

  // RESET HANDLER
  const resetHandler = () => {
    setValue({
      fullname: '',
      email: '',
      noHp: '',
      background: '',
      program: '',
      surat: '',
      textarea: '',
    });
    setError({});
  };

  return (
    <form className="form-body" onSubmit={submitHandler}>
      <FromInput
        label="Nama Lengkap"
        value={value.fullname}
        type="text"
        onChange={changeHandler}
        name="fullname"
        error={error.fullname}
      />
      <FromInput
        label="Email"
        value={value.email}
        type="email"
        onChange={changeHandler}
        name="email"
        error={error.email}
      />
      <FromInput
        label="No Handphone"
        value={value.noHp}
        type="text"
        onChange={changeHandler}
        name="noHp"
        error={error.noHp}
      />
      <div className="form-group">
        <label className="label-input">Latar Belakang Pendidikan</label>
        <div className="radio-group">
          <input
            name="background"
            id="it"
            type="radio"
            value="IT"
            onChange={changeHandler}
          />
          <label htmlFor="it">IT</label>
        </div>
        <div className="radio-group">
          <input
            name="background"
            id="non-it"
            value="Non IT"
            type="radio"
            onChange={changeHandler}
          />
          <label htmlFor="non-it">Non IT</label>
        </div>
        {error.background && <p className="text-error">{error.background}</p>}
      </div>
      <div className="form-group">
        <label className="label-input">Kelas Coding yang Dipilih</label>
        <select name="program" className="form-select" onChange={changeHandler}>
          <option value="">--Pilih salah satu program--</option>
          <option value="Coding Backend with Golang">
            Coding Backend with Golang
          </option>
          <option value="Coding Frontend with ReactJs">
            Coding Frontend with ReactJs
          </option>
          <option value="Fullstack Developer">Fullstack Developer</option>
        </select>
        {error.program && <p className="text-error">{error.program}</p>}
      </div>
      <div className="form-group">
        <label className="label-input">Foto Surat Kesungguhan</label>
        <input name="surat" type="file" onChange={changeHandler} />
        {error.surat && <p className="text-error">{error.surat}</p>}
      </div>
      <div className="form-group">
        <label className="label-input">Harapan untuk coding bootcamp ini</label>
        <textarea
          name="textarea"
          rows="5"
          value={value.textarea}
          onChange={changeHandler}
        ></textarea>
      </div>
      <button className="btn btn-submit" type="submit">
        Submit
      </button>
      <button onClick={resetHandler} className="btn btn-reset" type="reset">
        Reset
      </button>
    </form>
  );
};

export default Form;
