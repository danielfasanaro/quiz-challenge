import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Home,
  Quiz,
} from '../pages';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/quiz" component={ Quiz } />
    </Switch>
  );
}

export default Router;
