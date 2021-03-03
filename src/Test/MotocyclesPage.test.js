import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import React from 'react';
import MotorcyclesPage from '../containers/MotorcyclesPage';
import store from '../reducers/index';

const renderer = new ShallowRenderer();


it('should render MotorcyclesPage correctly', () => {
  renderer.render(
    <Provider store={store}>
      <MotorcyclesPage />
    </Provider>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});