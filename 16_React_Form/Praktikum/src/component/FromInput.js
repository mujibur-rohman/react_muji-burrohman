import React from 'react';

const FromInput = ({ name, label, value, type, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="label-input">
        {label}
      </label>
      <input
        name={name}
        type={type}
        id={name}
        className={`form-input ${error && 'form-input__error'}`}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-error">{error}</p>}
    </div>
  );
};

export default FromInput;
