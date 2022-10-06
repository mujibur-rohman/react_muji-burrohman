import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './app/features/api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApiProvider api={apiSlice}>
    <App />
  </ApiProvider>
);
