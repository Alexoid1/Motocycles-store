import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './users';
import motosReducer from './motos';
import favouritesReducer from './favourites';

const rootReducer = combineReducers({
  users: usersReducer,
  motos: motosReducer,
  favourites: favouritesReducer,
});
const initialState = {};
const store = createStore(
  rootReducer, initialState, applyMiddleware(thunk),
);

export default store;