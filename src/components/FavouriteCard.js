import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  deleteFavourite,
} from '../actions/index';
import './MotoCard.css';

const FavouriteCard = ({
  id, image, name, model, deleteFavourite,
}) => {
  const rou = `/motorcycles/${id}`;

  const handleRemove = e => {
    e.preventDefault();
    deleteFavourite(id * 1);
  };

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
};

FavouriteCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  deleteFavourite: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => ({
  deleteFavourite: (motoid) => dispatch(deleteFavourite(motoid)),
});

const mapStateToProps = state => ({
  favourites: state.favourites,
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteCard);
