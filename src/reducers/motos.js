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

const motosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOTOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        motos: action.payload,
        error: '',
      };
    case FETCH_MOTOS_FAILURE:
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
