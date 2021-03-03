import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import store from '../reducers/index';
import SliderMotoPage from '../components/SliderMotoPage';

const renderer = new ShallowRenderer();

it('should render SliderMotoPage correctly', () => {
  renderer.render(
    <Provider store={store}>
      <SliderMotoPage />
    </Provider>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});