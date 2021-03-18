import axios from 'axios';
import fetchConfig from '../helpers/fetch';
import baseUrl from '../helpers/base-url';

import {
  FETCH_MOTOS_FAILURE,
  FETCH_MOTOS_SUCCESS,
  FETCH_BOOKMOTO_FAILURE,
  FETCH_BOOKMOTO_REQUEST,
  FETCH_BOOKMOTO_SUCCESS,
  CREATE_BOOKMOTO_FAILURE,
  CREATE_BOOKMOTO_REQUEST,
  CREATE_BOOKMOTO_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  CREATE_USERS_FAILURE,
  CREATE_USERS_SUCCESS,
  LOGIN_USER,
  LOGOUT_USER,
  FETCH_FAVOURITES_FAILURE,
  FETCH_FAVOURITES_SUCCESS,
  CREATE_FAVOURITE_FAILURE,
  CREATE_FAVOURITE_REQUEST,
  CREATE_FAVOURITE_SUCCESS,

} from './types';



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


const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});



export const createUsersSuccess = user => ({
  type: CREATE_USERS_SUCCESS,
  payload: user,
});

const createUsersFailure = error => ({
  type: CREATE_USERS_FAILURE,
  payload: error,
});

export const loginUser = () => ({
  type: LOGIN_USER,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});


export const fetchFavouritesSuccess = motos => ({
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

export const fetchMotos = () => dispatch => {
  fetch(`${baseUrl}/motocycles`)
    .then(res => {
      if (res.ok) {
        res.json().then(res => {
          console.log(res)
          dispatch(fetchMotosSuccess(res));
        });
      }
    });
};

export const fetchMotoBook = () => dispatch => {
  dispatch(fetchBookMotoRequest);

  axios.get('/tests', fetchConfig())
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

export const fetchUsers = (email, password) => dispatch => {
 
  fetch(`${baseUrl}/login`, {
    ...fetchConfig(),
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password
      
    }),
  })
    .then(res => {
      if (res.ok) {
        res.json().then(jsonRes => {
          localStorage.setItem('motoToken', jsonRes.token);
          dispatch(fetchUsersSuccess(jsonRes))
        });
        dispatch(loginUser());
      } else {
        dispatch(logoutUser());
      }
      return res;
    })
};

export const createUsers = (name, email, password) => dispatch => {
  fetch(`${baseUrl}/register`, {
    ...fetchConfig(),
    method: 'POST',
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
      
    }),
  })
    .then(res => {
      if (res.ok) {
        res.json().then(jsonRes => {
          localStorage.setItem('motoToken', jsonRes.token);
          dispatch(createUsersSuccess(jsonRes))
        });
        dispatch(loginUser());
      } else {
        dispatch(logoutUser());
      }
      return res;
    })
};

export const setUser = user => dispatch => {
  dispatch(fetchUsersSuccess(user));
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
