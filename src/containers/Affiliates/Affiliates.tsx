import React from 'react';
import { Route, Switch } from 'react-router';

import AffiliatesEditor from 'pages/AffiliatesPage/AffiliatesEditor';
import AffiliatesList from 'pages/AffiliatesPage/AffiliatesList';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer } from './slice';
import { affiliatesSaga } from './saga';

const Affiliates = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: affiliatesSaga });

  return (
    <Switch>
      <Route path="/app/affiliates/list" component={AffiliatesList} />
      <Route path="/app/affiliates/new" component={AffiliatesEditor} />
    </Switch>
  );
};

export default Affiliates;
