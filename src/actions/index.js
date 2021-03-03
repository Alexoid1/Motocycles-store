import axios from 'axios';

import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  CREATE_USERS_FAILURE,
  CREATE_USERS_REQUEST,
  CREATE_USERS_SUCCESS,
  FETCH_MOTOS_FAILURE,
  FETCH_MOTOS_REQUEST,
  FETCH_MOTOS_SUCCESS,
  FETCH_FAVOURITES_FAILURE,
  FETCH_FAVOURITES_REQUEST,
  FETCH_FAVOURITES_SUCCESS,
  CREATE_FAVOURITE_FAILURE,
  CREATE_FAVOURITE_REQUEST,
  CREATE_FAVOURITE_SUCCESS,
  DELETE_FAVOURITE_FAILURE,
  DELETE_FAVOURITE_REQUEST,
  DELETE_FAVOURITE_SUCCESS,
  FETCH_BOOKMOTO_FAILURE,
  FETCH_BOOKMOTO_REQUEST,
  FETCH_BOOKMOTO_SUCCESS,
  CREATE_BOOKMOTO_FAILURE,
  CREATE_BOOKMOTO_REQUEST,
  CREATE_BOOKMOTO_SUCCESS,

} from './types';

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

const deleteFavouriteRequest = () => ({
  type: DELETE_FAVOURITE_REQUEST,
});

const deleteFavouriteSuccess = moto => ({
  type: DELETE_FAVOURITE_SUCCESS,
  payload: moto,
});

const deleteFavouriteFailure = error => ({
  type: DELETE_FAVOURITE_FAILURE,
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

export const fetchUsers = email => dispatch => {
  dispatch(fetchUsersRequest);
  axios.get('https://motocyclee-store.herokuapp.com/api/v1/users')
    .then(response => {
      const user = response.data.find(user => user.email === email);

      localStorage.setItem('userMoto', JSON.stringify(user));

      if (user) {
        dispatch(fetchUsersSuccess(user));
        window.location.href = '/motorcycles';
      } else {
        dispatch(fetchUsersFailure('user do not exist'));
      }
    })
    .catch(error => {
      dispatch(fetchUsersFailure(error.message));
    });
};

export const createUsers = (name, email) => dispatch => {
  dispatch(createUsersRequest);
  axios.post('https://motocyclee-store.herokuapp.com/api/v1/users',
    {
      name,
      email,
    })
    .then(response => {
      const user = response.data.name;
      localStorage.setItem('userMoto', JSON.stringify(response.data));
      if (user) {
        dispatch(createUsersSuccess(response.data));
        window.location.href = '/motorcycles';
      } else {
        dispatch(createUsersFailure('This email is in use, write another email!'));
      }
    })
    .catch(error => {
      dispatch(createUsersFailure(error.message));
    });
};

export const fetchMotos = () => dispatch => {
  dispatch(fetchMotosRequest);
  axios.get('https://motocyclee-store.herokuapp.com/api/v1/motocycles')
    .then(response => {
      const motos = response.data;

      dispatch(fetchMotosSuccess(motos));
    })
    .catch(error => {
      dispatch(fetchMotosFailure(error.message));
    });
};

export const fetchFavourites = userid => dispatch => {
  dispatch(fetchFavouritesRequest);
  axios.get(`https://motocyclee-store.herokuapp.com/api/v1/users/${userid}/favourites`)
    .then(response => {
      const motos = response.data;

      dispatch(fetchFavouritesSuccess(motos));
    })
    .catch(error => {
      dispatch(fetchFavouritesFailure(error.message));
    });
};

export const createFavourite = (userid, motoid) => dispatch => {
  dispatch(createFavouriteRequest);
  axios.post(`https://motocyclee-store.herokuapp.com/api/v1/users/${userid}/favourites`,
    {
      motocycle_id: motoid,
    })
    .then(response => {
      const user = response.data;

      dispatch(createFavouriteSuccess(user));
    })
    .catch(error => {
      dispatch(createFavouriteFailure(error.message));
    });
};

export const deleteFavourite = (userid, motoid) => dispatch => {
  dispatch(deleteFavouriteRequest);
  axios.delete(`https://motocyclee-store.herokuapp.com/api/v1/users/${userid}/favourites/${motoid}`)
    .then(response => {
      const favourites = response.data;

      dispatch(deleteFavouriteSuccess(favourites));
    })
    .catch(error => {
      dispatch(deleteFavouriteFailure(error.message));
    });
};

export const fetchMotoBook = userid => dispatch => {
  dispatch(fetchBookMotoRequest);
  axios.get(`https://motocyclee-store.herokuapp.com/api/v1/users/${userid}/tests`)
    .then(response => {
      const bookmotos = response.data;

      dispatch(fetchBookMotoSuccess(bookmotos));
    })
    .catch(error => {
      dispatch(fetchBookMotoFailure(error.message));
    });
};

export const createMotoBook = (userid, motoid, date, city) => dispatch => {
  dispatch(createBookMotoRequest);
  axios.post(`https://motocyclee-store.herokuapp.com/api/v1/users/${userid}/tests`,
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

export const setUser = user => dispatch => {
  dispatch(fetchUsersSuccess(user));
};
