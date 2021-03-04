import React from 'react';
import { Route, Switch } from 'react-router';

import LenderForm from './containers/LenderFormContainer';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer } from './store/slice';
import { lenderSaga } from './saga';

const Portfolios = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: lenderSaga });

  return (
    <Switch>
      <Route path="/app/lender/new" component={LenderForm} />
    </Switch>
  );
};

export default Portfolios;
