import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { HomePage, AboutUs, PageNotFound, MotorInsurancePage, ZipCode} from './pages';
import { store } from './actions/store';

function Router() {
  return (
    <Provider store = {store}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/motor-insurance" component={ MotorInsurancePage } />
      <Route exact path="/policy-holder" component={ ZipCode } />
      <Route component={PageNotFound} />
    </Switch>
    </Provider>
  );
}

export default Router;
