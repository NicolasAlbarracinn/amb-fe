import React from 'react';
import { Route, Switch } from 'react-router';

import PortfolioForm from './containers/PortfolioFormContainer';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer } from './store/slice';
import { portfolioSaga } from './saga';

const Portfolios = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: portfolioSaga });

  return (
    <Switch>
      <Route path="/app/portfolio/new" component={PortfolioForm} />
    </Switch>
  );
};

export default Portfolios;
