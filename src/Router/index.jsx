import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/home/Home';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
