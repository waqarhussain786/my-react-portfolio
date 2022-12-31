import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbartop from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbartop />
    <App />
  </React.StrictMode>
);
