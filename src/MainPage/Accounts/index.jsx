import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AccountPayable from './accountPayable';
import AccountReceiveable from './accountReceiveable';
import CustomerBalances from './customerBalances';
import FixedAssets from './fixedAssets';
import GeneralLedger from './generalLedger';
import ManualJournals from './manualJournals';

const Purchase = ({ match }) => (
  <Switch>
    {/* <Redirect
      exact
      from={`${match.url}/`}
      to={`${match.url}/manual-journals`}
    /> */}
    <Route path={`${match.url}/manual-journals`} component={ManualJournals} />
    <Route
      path={`${match.url}/account-receiveable`}
      component={AccountReceiveable}
    />
    <Route path={`${match.url}/account-payable`} component={AccountPayable} />
    <Route
      path={`${match.url}/customer-balances`}
      component={CustomerBalances}
    />
    <Route path={`${match.url}/general-ledger`} component={GeneralLedger} />
    <Route path={`${match.url}/fixed-assets`} component={FixedAssets} />
  </Switch>
);

('Source sans pro');

export default Purchase;
