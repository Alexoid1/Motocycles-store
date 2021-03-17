import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MotoCard.css';

const FavouriteCard = ({
  id, image, name, model,
}) => {
  const rou = `/motorcycles/${id}`;

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
};

FavouriteCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  favourites: state.favourites,
});

export default connect(mapStateToProps, null)(FavouriteCard);
