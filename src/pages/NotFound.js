// src/pages/NotFound.js
import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <img src="/images/Bearcraft-Where-Am-I.gif" alt="Not Found" className="not-found-gif" />
      <h1>404</h1>
      <p>Page Not Found</p>
      <a href="/">Go to Home</a>
    </div>
  );
};

export default NotFound;
