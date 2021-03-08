import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import store from '../reducers/index';
import FavouriteCard from '../components/FavouriteCard';

const renderer = new ShallowRenderer();

it('should render FavouriteCard correctly', () => {
  renderer.render(
    <Provider store={store}>
      <FavouriteCard />
    </Provider>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
