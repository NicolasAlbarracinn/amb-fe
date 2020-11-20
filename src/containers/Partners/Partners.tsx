import React from 'react';
import { Route, Switch } from 'react-router';

import PartnersEditor from 'pages/PartnersPage/PartnersEditor';
import PartnersList from 'pages/PartnersPage/PartnersList';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer } from './slice';
import { partnersSaga } from './saga';

const Partners = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: partnersSaga });

  return (
    <Switch>
      <Route path="/app/partners/list" component={PartnersList} />
      <Route path="/app/partners/new" component={PartnersEditor} />
    </Switch>
  );
};

export default Partners;
