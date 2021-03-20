import {
  FETCH_FAVOURITES_FAILURE,
  FETCH_FAVOURITES_SUCCESS,
  CREATE_FAVOURITE_SUCCESS,

} from '../actions/types';

const initialState = {
  motos: [],
  favourites: true,
  loading: false,
  error: '',
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case CREATE_FAVOURITE_SUCCESS:
      return {
        ...state,
        loading: false,
        favourites: action.payload,
        error: '',
      };
    default:
      return state;
  }
};

export default favouritesReducer;
