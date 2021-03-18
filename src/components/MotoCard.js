import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  createFavourite,
} from '../actions/index';
import './MotoCard.css';

const MotoCard = ({
  id, image, name, model, createFavourite,
}) => {
  const rou = `/motorcycles/${id}`;

  const handleLike = () => {
    createFavourite(id * 1);
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
        <div>
          <i className="fa fa-thumbs-up" aria-hidden="true" onClick={handleLike} />
        </div>
      </div>
    </div>

  );
};

MotoCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
  createFavourite: PropTypes.func.isRequired,
};

MotoCard.defaultProps = {
  user: {},
};

const mapDispatchToProps = dispatch => ({
  createFavourite: motoid => dispatch(createFavourite(motoid)),
});

const mapStateToProps = state => ({
  favourites: state.favourites,
  user: state.users.user,

});

export default connect(mapStateToProps, mapDispatchToProps)(MotoCard);
