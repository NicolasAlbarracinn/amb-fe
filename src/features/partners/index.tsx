import React from 'react';
import { Route, Switch } from 'react-router';

import PartnerFormContainer from './containers/PartnerFormContainer';
import PartnersList from './containers/PartnerListContainer';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer } from './store/slice';
import { partnersSaga } from './saga';

const Partners = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: partnersSaga });

  return (
    <Switch>
      <Route path="/app/partners/list" component={PartnersList} />
      <Route path="/app/partners/new" component={PartnerFormContainer} />
      <Route path="/app/partners/:partnerId" component={PartnerFormContainer} />
    </Switch>
  );
};

export default Partners;
