import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  createFavourite,
} from '../actions/index';
import './MotoCard.css';


const FavouriteCard = ({ id, image, name, model, user, createFavourite }) => {
  const rou="/motorcycles/"+id

  const handleLike = (e) => {
    e.preventDefault()
    console.log(user)
    createFavourite(user.id*1, id*1)
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
      </div>
   
  );
}

const mapDispatchToProps = dispatch => ({
  createFavourite: (userid,motoid) => dispatch(createFavourite(userid,motoid)),
});

const mapStateToProps = state => ({
  favourites: state.favourites,
  user: state.users.user
  
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteCard);