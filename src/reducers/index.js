import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './users';

const rootReducer = combineReducers({
  users: usersReducer,
  
});
const initialState = {};
const store = createStore(
  rootReducer, initialState, applyMiddleware(thunk),
);

export default store;