import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './reducers/index';
import './index.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://motorcycles-api.herokuapp.com/api/v1';
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('motoToken')}`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
