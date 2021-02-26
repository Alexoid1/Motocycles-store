import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  createFavourite,
} from '../actions/index';
import './MotoCard.css';


const MotoCard = ({ id, image, name, model, favourites, createFavourite }) => {
  const rou="/motorcycles/"+id

  const handleLike = () => {
    createFavourite()
  }
  
  return (
    
      <div className="cardMoto">
        <Link to={rou}>
          <div className="circleCont">
            <img className="imgCont" src={image} alt="heroimage" />
          </div>
          <h5>{name}</h5>
          <p className="description">{model}</p>
        </Link>
        <div className="iconsC">
          <div>
            <i class="fa fa-thumbs-up" aria-hidden="true" onClick={handleLike}></i>
          </div>
        </div>
      </div>
   
  );
}

const mapDispatchToProps = dispatch => ({
  createFavourite: (userid,motoid) => dispatch(createFavourite(userid,motoid)),
});

const mapStateToProps = state => ({
  favourites: state.favourites,
  users:state.users
  
});

export default connect(mapStateToProps, mapDispatchToProps)(MotoCard);