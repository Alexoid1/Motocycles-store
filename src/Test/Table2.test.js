import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import store from '../reducers/index';
import Table2 from '../components/Table2';

const renderer = new ShallowRenderer();

it('should render Table2 correctly', () => {
  renderer.render(
    <Provider store={store}>
      <Table2 />
    </Provider>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});