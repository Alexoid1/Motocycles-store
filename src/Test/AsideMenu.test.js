import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import store from '../reducers/index';
import AsideMenu from '../components/AsideMenu';

const renderer = new ShallowRenderer();

it('should render AsideMenu correctly', () => {
  renderer.render(
    <Provider store={store}>
      <AsideMenu />
    </Provider>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});