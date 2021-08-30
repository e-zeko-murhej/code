import React, { FunctionComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Overview from './pages/Overview';
import Campaigns from './pages/Campaigns';
import CampaignForm from './pages/CampaignForm';

const App: FunctionComponent = () => (
  <>
    <Switch>
      <Route path="/overview" component={Overview} />
      <Route path="/campaigns/create" component={CampaignForm} />
      <Route path="/campaigns" component={Campaigns} />
      <Redirect exact from="/" to="/overview" />
    </Switch>
    <ToastContainer />
  </>
);

export default App;
