import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import store from '../reducers/index';
import Slider from '../components/Slider';

const renderer = new ShallowRenderer();

it('should render Slider correctly', () => {
  renderer.render(
    <Provider store={store}>
      <Slider />
    </Provider>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
