import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/store';

test('Check the header', async () => {
  render(
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>,
  );
  const header = await screen.findByTestId('navBar');
  expect(header).toBeInTheDocument();
});
