import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import React from 'react';
import MotoPage from '../containers/MotoPage';
import store from '../reducers/index';

const renderer = new ShallowRenderer();

it('should render MotoPage correctly', () => {
  renderer.render(
    <Provider store={store}>
      <MotoPage />
    </Provider>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
