import React from 'react';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CampaignForm from '../pages/CampaignForm';

test('Create campaign form', async () => {
  render(
    <Provider store={store}>
      <Router>
        <Switch>
          <CampaignForm />
        </Switch>
      </Router>
    </Provider>,
  );

  const textField = await screen.getByPlaceholderText('Campaign name');
  const button = await screen.getByText('Create');
  fireEvent.change(textField, { target: { value: 'test campaign' } });
  fireEvent.click(button);
  waitFor(async () => {
    const notification = await screen.getByText('New Campaign has been created successfully!');
    expect(notification).toBeInTheDocument();
  }, { timeout: 3000 });
});
