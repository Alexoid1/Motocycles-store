import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import store from '../reducers/index';
import TestMoto from '../components/TestMoto';

const renderer = new ShallowRenderer();

it('should render TestMoto correctly', () => {
  renderer.render(
    <Provider store={store}>
      <TestMoto />
    </Provider>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
