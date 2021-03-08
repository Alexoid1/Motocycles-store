import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import store from '../reducers/index';
import TestsContainer from '../components/TestsContainer';

const renderer = new ShallowRenderer();

it('should render TestsContainer correctly', () => {
  renderer.render(
    <Provider store={store}>
      <TestsContainer />
    </Provider>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
