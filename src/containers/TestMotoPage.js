import React from 'react';
import { Link } from 'react-router-dom';
import BookForm from '../components/BookForm';
import './TestMotoPage.css';

const TestMotoPage = () => (
  <div className="contTC">
    <div className="contTest">
      <Link className="exitLink" to="/motorcycles">
        <i className="fa fa-arrow-left" aria-hidden="true" />
        {' '}
        BACK
      </Link>
      <div className="conForm">
        <div className="formContainer">
          <h2>BOOK A MOTORCYCLE TEST-RIDE</h2>
          <hr />
          <p>There more than 15 motorcycles model. There are showrooms all over the globe which some includes test-ride facilities if you want to find-out if a test-ride is available plese use the selector below</p>
          <BookForm />
        </div>
      </div>
    </div>
  </div>
);

export default TestMotoPage;
