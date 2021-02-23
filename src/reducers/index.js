import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './users';
import motosReducer from './motos';

const rootReducer = combineReducers({
  users: usersReducer,
  motos: motosReducer,
});
const initialState = {};
const store = createStore(
  rootReducer, initialState, applyMiddleware(thunk),
);

export default store;