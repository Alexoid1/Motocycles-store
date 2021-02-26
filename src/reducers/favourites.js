import {
    FETCH_MOTOS_FAILURE,
    FETCH_MOTOS_REQUEST,
    FETCH_MOTOS_SUCCESS,
} from '../actions/types';

const initialState = {
    motos: [],
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
      default:
        return state;
    }
};
  
export default motosReducer;