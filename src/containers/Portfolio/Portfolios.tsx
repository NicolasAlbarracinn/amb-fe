import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PortfolioForm from 'pages/PortfolioPage';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './slice';
import { portfolioSaga } from './saga';
import { selectLenderNameList } from './selectors';

import { selectSubmitReady, selectStepsData } from 'containers/WizardContainer/selectors';

const Portfolios = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: portfolioSaga });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getLendersNameListRequest());
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/app/portfolio/new" component={PortfolioForm} />
    </Switch>
  );
};

export default Portfolios;
