import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, AboutUs, PageNotFound, MotorInsurancePage} from './pages';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/motor-insurance" component={ MotorInsurancePage } />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Router;
