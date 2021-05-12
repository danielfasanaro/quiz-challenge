import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Home,
  Quiz,
  Results,
} from '../pages';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/quiz" component={ Quiz } />
      <Route path="/results" component={ Results } />
    </Switch>
  );
}

export default Router;
