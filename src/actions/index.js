import axios from 'axios';

import {
  FETCH_MOTOS_FAILURE,
  FETCH_MOTOS_REQUEST,
  FETCH_MOTOS_SUCCESS,
  FETCH_BOOKMOTO_FAILURE,
  FETCH_BOOKMOTO_REQUEST,
  FETCH_BOOKMOTO_SUCCESS,
  CREATE_BOOKMOTO_FAILURE,
  CREATE_BOOKMOTO_REQUEST,
  CREATE_BOOKMOTO_SUCCESS,

} from './types';

const fetchMotosRequest = () => ({
  type: FETCH_MOTOS_REQUEST,
});

const fetchMotosSuccess = motos => ({
  type: FETCH_MOTOS_SUCCESS,
  payload: motos,
});

const fetchMotosFailure = error => ({
  type: FETCH_MOTOS_FAILURE,
  payload: error,
});

const fetchBookMotoRequest = () => ({
  type: FETCH_BOOKMOTO_REQUEST,
});

const fetchBookMotoSuccess = bookmoto => ({
  type: FETCH_BOOKMOTO_SUCCESS,
  payload: bookmoto,
});

const fetchBookMotoFailure = error => ({
  type: FETCH_BOOKMOTO_FAILURE,
  payload: error,
});

const createBookMotoRequest = () => ({
  type: CREATE_BOOKMOTO_REQUEST,
});

const createBookMotoSuccess = bookmoto => ({
  type: CREATE_BOOKMOTO_SUCCESS,
  payload: bookmoto,
});

const createBookMotoFailure = error => ({
  type: CREATE_BOOKMOTO_FAILURE,
  payload: error,
});

export const fetchMotos = () => dispatch => {
  dispatch(fetchMotosRequest());
  axios.get('/motocycles')
    .then(response => {
      const motos = response.data;

      dispatch(fetchMotosSuccess(motos));
    })
    .catch(error => {
      dispatch(fetchMotosFailure(error.message));
    });
};

export const fetchMotoBook = () => dispatch => {
  dispatch(fetchBookMotoRequest);

  axios.get('/tests', { mode: 'cors' })
    .then(response => {
      const bookmotos = response.data;

      dispatch(fetchBookMotoSuccess(bookmotos));
    })
    .catch(error => {
      dispatch(fetchBookMotoFailure(error.message));
    });
};

export const createMotoBook = (motoid, date, city) => dispatch => {
  dispatch(createBookMotoRequest);
  axios.post('/tests',
    {
      motocycle_id: motoid,
      testDate: date,
      city,
    })
    .then(response => {
      const bookmotos = response.data;
      dispatch(createBookMotoSuccess(bookmotos));
    })
    .catch(error => {
      dispatch(createBookMotoFailure(error.message));
    });
};
