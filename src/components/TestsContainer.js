import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DotLoader from "react-spinners/ClipLoader";
import TestMoto from './TestMoto';
import './TestsContainer.css'

import {
    fetchMotoBook,
    
  } from '../actions/index';

const TestsContainer = ({ fetchMotoBook, bookmoto, motos, user }) => {
  
    if(!user){
        user = JSON.parse(localStorage.getItem('userMoto'));
    }
  useEffect(() => {
    fetchMotoBook(user.id);
    
  }, []);


  

  let comp2;
  if (bookmoto.loading) {
    comp2 = 
      <div className="loader">
        <DotLoader />
      </div>;
  } else if (bookmoto.error) {
    comp2 = <h2 className="error">{bookmoto.error}</h2>;
  }else if(bookmoto.bookmoto.length===0){
    comp2=<div className="loader"><h2 className="error">No Test-Drive added yet</h2></div>
  } else {
    comp2=
    <div className="testBoxCont">
        
        <div>
          {
            bookmoto.bookmoto.map(book => (
                <TestMoto
                key={book.id+'c'}
                id={book.id}
                motocycle={motos[book.motocycle_id-1]}
                date={book.testDate}
                city={book.city}
              />
            ))
          }
        </div>
       
        
    </div>
 }
  return comp2
}

const mapDispatchToProps = dispatch => ({
    fetchMotoBook: (userid) => dispatch(fetchMotoBook(userid)),
});
  
const mapStateToProps = state => ({
    bookmoto: state.bookmoto,
    motos: state.motos.motos,
    user: state.users.user
});
  
export default connect(mapStateToProps, mapDispatchToProps)(TestsContainer);