import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import store from '../reducers/index';
import MotoCard from '../components/MotoCard';

const renderer = new ShallowRenderer();

it('should render MotoCard correctly', () => {
  renderer.render(
    <Provider store={store}>
      <MotoCard />
    </Provider>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});