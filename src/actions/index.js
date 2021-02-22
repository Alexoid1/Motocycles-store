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

export const fetchUsers = (email) => dispatch => {
    dispatch(fetchUsersRequest);
    axios.get('https://motocyclee-store.herokuapp.com/api/v1/users')
      .then(response => {
        const user = response.data.find(user=>user.email===email);
        
        dispatch(fetchUsersSuccess(user));
    })
      .catch(error => {
        dispatch(fetchUsersFailure(error.message));
    });
};