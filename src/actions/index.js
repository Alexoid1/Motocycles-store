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
  SET_USER
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


export const fetchUsers = (email) => dispatch => {
    dispatch(fetchUsersRequest);
    axios.get('https://motocyclee-store.herokuapp.com/api/v1/users')
      .then(response => {
        const user = response.data.find(user=>user.email===email);
        console.log(user)
       
        localStorage.setItem('userMoto', JSON.stringify(user));
        
        if(user){
          
          window.location.href = '/motorcycles';
        }

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
        window.location.href = '/motorcycles';
    })
      .catch(error => {
        dispatch(createUsersFailure(error.message));
    });
};

export const fetchMotos = () => dispatch => {
  dispatch(fetchMotosRequest);
  axios.get('https://motocyclee-store.herokuapp.com/api/v1/motocycles')
    .then(response => {
      const motos = response.data

      dispatch(fetchMotosSuccess(motos));
  })
    .catch(error => {
      dispatch(fetchMotosFailure(error.message));
  });
};

export const fetchFavourites = (userid) => dispatch => {
  dispatch(fetchFavouritesRequest);
  axios.get(`https://motocyclee-store.herokuapp.com/api/v1/users/${userid}/favourites`)
    .then(response => {
      const motos = response.data

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
    user_id: userid,
    motocycle_id: motoid,
  })
    .then(response => {
      const user = response.data
      console.log(user)
      dispatch(createFavouriteSuccess(user));
      
  })
    .catch(error => {
      dispatch(createFavouriteFailure(error.message));
  });
};