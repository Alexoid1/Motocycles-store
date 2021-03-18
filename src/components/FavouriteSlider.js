import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DotLoader from 'react-spinners/ClipLoader';
import './MotosSlider.css';
import FavouriteCard from './FavouriteCard';
import {
  fetchFavourites,
} from '../actions/favouriteActions';

const FavouriteSlider = ({ fetchFavourites, motos }) => {
  const [index, setIndex] = useState(2);

  useEffect(() => {
    fetchFavourites();
  }, []);

  const nextSlide = () => {
    if (index + 1 === motos.motos.length) {
      setIndex(2);
    } else {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index - 3 < 0) {
      setIndex(motos.motos.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  /* eslint-disable consistent-return */
  const itemArr = (ind, moto) => {
    const lastIndex = index - 3;
    if (ind <= index && ind > lastIndex) {
      return (
        <FavouriteCard
          key={`${moto.id}s`}
          id={moto.id}
          image={moto.image}
          name={moto.name}
          model={moto.model}
        />
      );
    }
  };

  let comp;
  if (motos.loading) {
    comp = (
      <div className="loader">
        <DotLoader />
      </div>
    );
  } else if (motos.motos.length > 0) {
    comp = (
      <div className="sliderContainer">
        <button className="buttonLeft" type="button" onClick={prevSlide}>
          <i className="fa fa-chevron-left fa-2x" aria-hidden="true" />
          .
        </button>
        <div className="header-container">
          {
              motos.motos.map((moto, ind) => (
                itemArr(ind, moto)
              ))
            }
        </div>
        <button className="buttonRight" type="button" onClick={nextSlide}>
          .
          <i className="fa fa-chevron-right fa-2x" aria-hidden="true" />
        </button>

      </div>
    );
  } else if (motos.motos.length === 0) {
    comp = <div className="loader"><h2 className="error">Not Models added yet</h2></div>;
  }
  return comp;
};

FavouriteSlider.propTypes = {
  fetchFavourites: PropTypes.func.isRequired,
  motos: PropTypes.shape({
    motos: PropTypes.arrayOf(PropTypes.object),
    error: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
  }),
};

const mapDispatchToProps = dispatch => ({
  fetchFavourites: () => dispatch(fetchFavourites()),
});

const mapStateToProps = state => ({
  motos: state.favourites,
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteSlider);
