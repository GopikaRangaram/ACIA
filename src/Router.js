import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { HomePage, AboutUs, PageNotFound, MotorInsurancePage} from './pages';
import { store } from './actions/store';
import ClaimForm from './components/Layout/ClaimForm/ClaimForm';
import PayBill from './components/Layout/PayBillForm/PayBill';
import BillPolicy from './components/Layout/PayBillForm/PayBill_policy';

function Router() {
  return (
    <Provider store = {store}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/motor-insurance" component={ MotorInsurancePage } />
      {/* <Route exact path="/policy-holder" component={ ZipCode } /> */}
      <Route exact path="/claim" component={ ClaimForm } />
      <Route exact path="/pay-bill" component={ PayBill } />
      <Route exact path="/pay-bill-policyType" component={ BillPolicy } />
      <Route component={PageNotFound} />
    </Switch>
    </Provider>
  );
}

export default Router;
