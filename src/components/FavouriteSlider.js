import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import DotLoader from "react-spinners/ClipLoader";
import './MotosSlider.css'
import FavouriteCard from './FavouriteCard'
import {
    fetchFavourites,
  } from '../actions/index';

const FavouriteSlider = ({ fetchFavourites, motos, users }) => {
  const[index,setIndex]=useState(2)
  const user = JSON.parse(localStorage.getItem('userMoto'));
  
  useEffect(() => {
    if(users.user.id){
      fetchFavourites(users.user.id);
    }else{
      fetchFavourites(user.id);
    }
    
  }, []);

  

  const nextSlide = () => {
    if(index+1===motos.motos.length){
      setIndex(2)
    }else{
      setIndex(index +1)
    }
    
  }

  const prevSlide = () => {
    if(index-3<0){
      setIndex(motos.motos.length-1)
    }else{
      setIndex(index -1)
    }
    
  }

  const itemArr = (ind,moto) =>{
    const lastIndex=index-3
    if(ind<=index && ind>lastIndex ){
      return(<FavouriteCard
        key={moto.id+'s'}
        id={moto.id}
        image={moto.image}
        name={moto.name}
        model={moto.model}
      />)
    }
  }

  let comp;
  if (motos.loading||motos.motos.length===0) {
    comp = 
      <div className="loader">
        <DotLoader />
      </div>;
  } else if (motos.error) {
    comp = <h2 className="error">{motos.error}</h2>;
  } else {
    comp=
    <div className="sliderContainer">
        <button className="buttonLeft" type="button" onClick={prevSlide}><i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i></button>
        <div className="header-container">
          {
            motos.motos.map((moto,ind) => (
              itemArr(ind,moto) 
            ))
          }
        </div>
        <button className="buttonRight" type="button" onClick={nextSlide} ><i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i></button>
        
    </div>
 }
  return comp
}

const mapDispatchToProps = dispatch => ({
    fetchFavourites: (userid) => dispatch(fetchFavourites(userid)),
});
  
const mapStateToProps = state => ({
    motos: state.favourites,
    users: state.users
});
  
export default connect(mapStateToProps, mapDispatchToProps)(FavouriteSlider);