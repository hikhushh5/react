import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import // eslint-disable-next-line 
app from './app';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <app />
  </React.StrictMode>
);