import { Provider } from 'react-redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import store from '../reducers/index';
import BookForm from '../components/BookForm';

const renderer = new ShallowRenderer();

it('should render BookForm correctly', () => {
  renderer.render(
    <Provider store={store}>
      <BookForm />
    </Provider>,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
