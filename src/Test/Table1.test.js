import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import store from '../reducers/index';
import Table1 from '../components/Table1';

const renderer = new ShallowRenderer();

it('should render Table1 correctly', () => {
  renderer.render(
    <Provider store={store}>
      <Table1 />
    </Provider>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});