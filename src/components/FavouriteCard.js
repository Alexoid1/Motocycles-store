import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  deleteFavourite,
} from '../actions/index';
import './MotoCard.css';


const FavouriteCard = ({ id, image, name, model, user, deleteFavourite }) => {
  const rou="/motorcycles/"+id

  const handleRemove = (e) => {
    e.preventDefault()
   
    deleteFavourite(user.id*1, id*1)
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
          <button type="button" className="removeButton" onClick={handleRemove}>Remove</button>
        </div>
      </div>
   
  );
}

const mapDispatchToProps = dispatch => ({
  deleteFavourite: (userid,motoid) => dispatch(deleteFavourite(userid,motoid)),
});

const mapStateToProps = state => ({
  favourites: state.favourites,
  user: state.users.user
  
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteCard);