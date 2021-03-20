import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import React from 'react';
import SignUpPage from '../containers/SignUpPage';
import store from '../reducers/index';

const renderer = new ShallowRenderer();

it('should render SignUpPage correctly', () => {
  renderer.render(
    <Provider store={store}>
      <SignUpPage />
    </Provider>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
