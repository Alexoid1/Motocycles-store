import axios from 'axios';
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  CREATE_USERS_FAILURE,
  CREATE_USERS_REQUEST,
  CREATE_USERS_SUCCESS,
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
  
const createUsersSuccess = user => ({
    type: CREATE_USERS_SUCCESS,
    payload: user,
});
  
const createUsersFailure = error => ({
    type: CREATE_USERS_FAILURE,
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

export const createUsers = (name, email) => dispatch => {
    dispatch(createUsersRequest);
    axios.post('https://motocyclee-store.herokuapp.com/api/v1/users',
    {
      name: name,
      email: email,
    })
      .then(response => {
        const user = response.data
        console.log(user)
        dispatch(createUsersSuccess(user));
    })
      .catch(error => {
        dispatch(createUsersFailure(error.message));
    });
};