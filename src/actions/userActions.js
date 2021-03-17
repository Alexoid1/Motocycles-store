import axios from 'axios';

import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  CREATE_USERS_FAILURE,
  CREATE_USERS_REQUEST,
  CREATE_USERS_SUCCESS,
  LOGIN_USER,
  LOGOUT_USER,
} from './userTypes';

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
