import React from 'react';
import { Link } from 'react-router-dom';
import './NotPage.css';

const NotFound = () => (
  <div className="errorPage">
    <h1>404 - Not Found!</h1>
    <Link to="/">
      -- Go Login Page --
    </Link>
  </div>
);

export default NotFound;
