import baseUrl from '../helpers/base-url';

import {
  FETCH_MOTOS_FAILURE,
  FETCH_MOTOS_SUCCESS,
  FETCH_BOOKMOTO_FAILURE,
  FETCH_BOOKMOTO_SUCCESS,
  CREATE_BOOKMOTO_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  CREATE_USERS_FAILURE,
  CREATE_USERS_SUCCESS,
  LOGIN_USER,
  FETCH_FAVOURITES_FAILURE,
  FETCH_FAVOURITES_SUCCESS,
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

const fetchBookMotoSuccess = bookmoto => ({
  type: FETCH_BOOKMOTO_SUCCESS,
  payload: bookmoto,
});

const fetchBookMotoFailure = error => ({
  type: FETCH_BOOKMOTO_FAILURE,
  payload: error,
});

const createBookMotoSuccess = bookmoto => ({
  type: CREATE_BOOKMOTO_SUCCESS,
  payload: bookmoto,
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

export const fetchFavouritesSuccess = motos => ({
  type: FETCH_FAVOURITES_SUCCESS,
  payload: motos,
});

const fetchFavouritesFailure = error => ({
  type: FETCH_FAVOURITES_FAILURE,
  payload: error,
});

const createFavouriteSuccess = moto => ({
  type: CREATE_FAVOURITE_SUCCESS,
  payload: moto,
});

export const fetchMotos = () => dispatch => {
  fetch(`${baseUrl}/motocycles`)
    .then(res => {
      if (res.ok) {
        res.json().then(res => {
          dispatch(fetchMotosSuccess(res));
        });
      } else {
        fetchMotosFailure('error fetch motos');
      }
    }).catch(error => {
      dispatch(fetchMotosFailure(error));
    });
};

export const fetchMotoBook = motosb => dispatch => {
  dispatch(fetchBookMotoSuccess(motosb));
};

export const fetchMotoBookFail = error => dispatch => {
  dispatch(fetchBookMotoFailure(error));
};

export const createMotoBook = moto => dispatch => {
  dispatch(createBookMotoSuccess(moto));
};

export const fetchUsers = user => dispatch => {
  dispatch(fetchUsersSuccess(user));
};

export const fetchUsersFail = error => dispatch => {
  dispatch(fetchUsersFailure(error));
};

export const createUsers = user => dispatch => {
  dispatch(createUsersSuccess(user));
};

export const createUsersFail = error => dispatch => {
  dispatch(createUsersFailure(error));
};

export const setUser = user => dispatch => {
  dispatch(fetchUsersSuccess(user));
};

export const fetchFavourite = motoid => dispatch => {
  dispatch(fetchFavouritesSuccess(motoid));
};

export const fetchFavouriteFail = motoid => dispatch => {
  dispatch(fetchFavouritesFailure(motoid));
};

export const createFavourite = motoid => dispatch => {
  dispatch(createFavouriteSuccess(motoid));
};
