import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Sales from '../pages/Sales';

function routes() {
  return (
    <Switch>
      <Route path="/dashboard/sales" component={Sales} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/" exact component={SignIn} />
    </Switch>
  );
}

export default routes;
