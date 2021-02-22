import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    CREATE_USERS_FAILURE,
    CREATE_USERS_REQUEST,
    CREATE_USERS_SUCCESS,
} from '../actions/types';
  
const initialState = {
    user: null,
    loading: false,
    called: false,
    error: '',
};
  
const heroesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          called: true,
          user: action.payload,
          error: '',
        };
      case FETCH_USERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    case CREATE_USERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
    case CREATE_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          called: true,
          user: action.payload,
          error: '',
        };
    case CREATE_USERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
};
  
export default heroesReducer;