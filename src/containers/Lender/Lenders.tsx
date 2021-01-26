import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import LenderForm from 'pages/LenderPage';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './slice';
import { lenderSaga } from './saga';

import { selectSubmitReady, selectStepsData } from 'containers/WizardContainer/selectors';

const Portfolios = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: lenderSaga });

  const dispatch = useDispatch();
  const submitReady = useSelector(selectSubmitReady);
  const data = useSelector(selectStepsData);

  useEffect(() => {
    if (!isEmpty(data)) {
      dispatch(
        actions.setLenderRequest({
          ...data.lenderDetails,
          economicActivity: data.economicActivity,
          address: data.address,
        }),
      );
    }
  }, [submitReady]);

  return (
    <Switch>
      <Route path="/app/lender/new" component={LenderForm} />
    </Switch>
  );
};

export default Portfolios;
