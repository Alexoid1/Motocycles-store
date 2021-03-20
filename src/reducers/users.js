import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  CREATE_USERS_FAILURE,
  CREATE_USERS_SUCCESS,
  LOGIN_USER,
} from '../actions/types';

const initialState = {
  user: {},
  token: localStorage.getItem('motoToken'),
  login: false,
  loading: false,
  called: false,
  error: '',
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        login: true,
        called: true,
        user: action.payload,
        token: action.payload.token,
        error: '',
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        called: true,
        login: true,
        user: action.payload,
        token: action.payload.token,
        error: '',
      };
    case CREATE_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        login: true,
      };
    default:
      return state;
  }
};

export default usersReducer;
