import {
  FETCH_FAVOURITES_FAILURE,
  FETCH_FAVOURITES_REQUEST,
  FETCH_FAVOURITES_SUCCESS,
  CREATE_FAVOURITE_FAILURE,
  CREATE_FAVOURITE_REQUEST,
  CREATE_FAVOURITE_SUCCESS,

} from '../actions/favouriteTypes';

const initialState = {
  motos: [],
  moto: null,
  favourites: [],
  loading: false,
  error: '',
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FAVOURITES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FAVOURITES_SUCCESS:
      return {
        ...state,
        loading: false,
        motos: action.payload,
        error: '',
      };
    case FETCH_FAVOURITES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_FAVOURITE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_FAVOURITE_SUCCESS:
      return {
        ...state,
        loading: false,
        favourites: action.payload,
        error: '',
      };
    case CREATE_FAVOURITE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default favouritesReducer;
