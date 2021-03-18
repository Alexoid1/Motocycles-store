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
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  CREATE_USERS_FAILURE,
  CREATE_USERS_REQUEST,
  CREATE_USERS_SUCCESS,
  LOGIN_USER,
  LOGOUT_USER,
  FETCH_FAVOURITES_FAILURE,
  FETCH_FAVOURITES_REQUEST,
  FETCH_FAVOURITES_SUCCESS,
  CREATE_FAVOURITE_FAILURE,
  CREATE_FAVOURITE_REQUEST,
  CREATE_FAVOURITE_SUCCESS,

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

const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

const createUsersRequest = () => ({
  type: CREATE_USERS_REQUEST,
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

export const fetchUsers = (email, password) => dispatch => {
  dispatch(fetchUsersRequest);

  axios.post('/login', {

    email,
    password,
  })
    .then(response => {
      const user = response.data;

      localStorage.setItem('motoToken', user.token);

      if (user) {
        dispatch(fetchUsersSuccess(user));
        dispatch(loginUser());
      } else {
        dispatch(fetchUsersFailure('user do not exist'));
      }
    })
    .catch(error => {
      dispatch(fetchUsersFailure(error.message));
    });
};

export const createUsers = (name, email, password) => dispatch => {
  dispatch(createUsersRequest);

  axios.post('/register',
    {
      name,
      email,
      password,
    })
    .then(response => {
      const user = response.data;
      localStorage.setItem('motoToken', user.token);
      if (user) {
        dispatch(createUsersSuccess(response.data));
        dispatch(loginUser());
      } else {
        dispatch(createUsersFailure('This email is in use, write another email!'));
      }
    })
    .catch(error => {
      dispatch(createUsersFailure(error.message));
    });
};

export const setUser = user => dispatch => {
  dispatch(fetchUsersSuccess(user));
};

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
