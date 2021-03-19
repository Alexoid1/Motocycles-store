import {
  FETCH_BOOKMOTO_FAILURE,
  FETCH_BOOKMOTO_SUCCESS,
  CREATE_BOOKMOTO_SUCCESS,
} from '../actions/types';

const initialState = {
  bookmoto: [],
  loading: false,
  moto: [],
  error: '',
};

const bookmotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKMOTO_SUCCESS:
      return {
        ...state,
        loading: false,
        bookmoto: action.payload,
        error: '',
      };
    case FETCH_BOOKMOTO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_BOOKMOTO_SUCCESS:
      return {
        ...state,
        loading: false,
        moto: action.payload,
        error: '',
      };
    default:
      return state;
  }
};

export default bookmotoReducer;
