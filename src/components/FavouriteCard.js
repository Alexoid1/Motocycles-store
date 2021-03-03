import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  deleteFavourite,
} from '../actions/index';
import './MotoCard.css';

const FavouriteCard = ({
  id, image, name, model, user, deleteFavourite,
}) => {
  const rou = `/motorcycles/${id}`;

  const handleRemove = e => {
    e.preventDefault();

    deleteFavourite(user.id * 1, id * 1);
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
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
  deleteFavourite: PropTypes.func.isRequired,
};

FavouriteCard.defaultProps = {
  user: {},
};

const mapDispatchToProps = dispatch => ({
  deleteFavourite: (userid, motoid) => dispatch(deleteFavourite(userid, motoid)),
});

const mapStateToProps = state => ({
  favourites: state.favourites,
  user: state.users.user,

});

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteCard);
