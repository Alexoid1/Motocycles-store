import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import React from 'react';
import TestMotoPage from '../containers/TestMotoPage';
import store from '../reducers/index';

const renderer = new ShallowRenderer();

it('should render TestMotoPage correctly', () => {
  renderer.render(
    <Provider store={store}>
      <TestMotoPage />
    </Provider>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
