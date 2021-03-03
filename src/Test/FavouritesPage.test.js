import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import React from 'react';
import FavouritesPage from '../containers/FavouritesPage';
import store from '../reducers/index';

const renderer = new ShallowRenderer();


it('should render FavouritesPage correctly', () => {
  renderer.render(
    <Provider store={store}>
      <FavouritesPage />
    </Provider>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});