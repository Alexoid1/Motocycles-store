import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import store from '../reducers/index';
import MotosSlider from '../components/MotosSlider';

const renderer = new ShallowRenderer();

it('should render MotosSlider correctly', () => {
  renderer.render(
    <Provider store={store}>
      <MotosSlider />
    </Provider>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
