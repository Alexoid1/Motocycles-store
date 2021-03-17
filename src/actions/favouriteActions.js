import axios from 'axios';

import {
  FETCH_FAVOURITES_FAILURE,
  FETCH_FAVOURITES_REQUEST,
  FETCH_FAVOURITES_SUCCESS,
  CREATE_FAVOURITE_FAILURE,
  CREATE_FAVOURITE_REQUEST,
  CREATE_FAVOURITE_SUCCESS,
} from './favouriteTypes';

const fetchFavouritesRequest = () => ({
  type: FETCH_FAVOURITES_REQUEST,
});

const fetchFavouritesSuccess = motos => ({
  type: FETCH_FAVOURITES_SUCCESS,
  payload: motos,
});

const fetchFavouritesFailure = error => ({
  type: FETCH_FAVOURITES_FAILURE,
  payload: error,
});

const createFavouriteRequest = () => ({
  type: CREATE_FAVOURITE_REQUEST,
});

const createFavouriteSuccess = moto => ({
  type: CREATE_FAVOURITE_SUCCESS,
  payload: moto,
});

const createFavouriteFailure = error => ({
  type: CREATE_FAVOURITE_FAILURE,
  payload: error,
});

export const fetchFavourites = () => dispatch => {
  dispatch(fetchFavouritesRequest);

  axios.get('/favourites', { mode: 'cors' })
    .then(response => {
      const motos = response.data;
      dispatch(fetchFavouritesSuccess(motos));
    })
    .catch(error => {
      dispatch(fetchFavouritesFailure(error.message));
    });
};

export const createFavourite = motoid => dispatch => {
  dispatch(createFavouriteRequest);
  axios.post('/favourites',
    {
      motocycle_id: motoid,
    })
    .then(response => {
      const motosf = response.data;
      dispatch(createFavouriteSuccess(motosf));
    })
    .catch(error => {
      dispatch(createFavouriteFailure(error.message));
    });
};
