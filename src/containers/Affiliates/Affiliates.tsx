import AffiliatesEditor from 'pages/AffiliatesPage/AffiliatesEditor';
import Dashboard from 'pages/Dashboard/Dashboard';
import React from 'react';
import { Route, Switch } from 'react-router';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer } from './slice';
import { affiliatesSaga } from './saga';

const Affiliates = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: affiliatesSaga });

  return (
    <Switch>
      <Route path="/app/affiliates/list" component={Dashboard} />
      <Route path="/app/affiliates/new" component={AffiliatesEditor} />
    </Switch>
  );
};

export default Affiliates;
