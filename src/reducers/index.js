import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './users';
import motosReducer from './motos';
import favouritesReducer from './favourites';
import bookmotoReducer from './bookMoto'

const rootReducer = combineReducers({
  users: usersReducer,
  motos: motosReducer,
  favourites: favouritesReducer,
  bookmoto: bookmotoReducer
});
const initialState = {};
const store = createStore(
  rootReducer, initialState, applyMiddleware(thunk),
);

export default store;