import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1>Page Not Found</h1>
      <button
        style={{
          backgroundColor: 'blueviolet',
          color: 'white',
          padding: '1rem',
          border: 'none',
          marginTop: '1rem',
        }}
        onClick={() => navigate('/')}
      >
        Kembali Ke Home
      </button>
    </div>
  );
};

export default NotFound;
