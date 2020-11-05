import AffiliatesEditor from 'pages/AffiliatesPage/AffiliatesEditor';
import Dashboard from 'pages/Dashboard/Dashboard';
import React from 'react';
import { Route, Switch } from 'react-router';

const Affiliates = () => {
  return (
    <Switch>
      <Route path="/app/affiliates/list" component={Dashboard} />
      <Route path="/app/affiliates/new" component={AffiliatesEditor} />
    </Switch>
  );
};

export default Affiliates;
