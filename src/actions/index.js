import axios from 'axios';
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from './types';

const fetchUsersRequest = () => ({
    type: FETCH_USERS_REQUEST,
  });
  
const fetchUsersSuccess = heroes => ({
    type: FETCH_USERS_SUCCESS,
    payload: heroes,
});
  
const fetchUsersFailure = error => ({
    type: FETCH_USERS_FAILURE,
    payload: error,
});

export const fetchUsers = () => dispatch => {
    dispatch(fetchUsersRequest);
    axios.get('https://akabab.github.io/superhero-api/api/all.json')
      .then(response => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
    })
      .catch(error => {
        dispatch(fetchUsersFailure(error.message));
    });
};