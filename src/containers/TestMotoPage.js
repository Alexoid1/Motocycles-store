import React from 'react';
import BookForm from '../components/BookForm';
import { Link } from 'react-router-dom';
import './TestMotoPage.css';


const TestMotoPage = () => {
 

  return (
    <div className="contTC">
        <div className="contTest">
        <Link className="exitLink" to="/motorcycles"><i class="fa fa-arrow-left" aria-hidden="true"></i> BACK</Link>
          <div className="conForm">
            <div className="formContainer">
                <h2>BOOK A MOTORCYCLE TEST-RIDE</h2>
                <hr/>
                <p>There more than 15 motorcycles model. There are showrooms all over the globe which some includes test-ride facilities if you want to find-out if a test-ride is available plese use the selector below</p>
                <BookForm/>
            </div>
          </div>
        </div>
    </div> 
  );
}

export default TestMotoPage;